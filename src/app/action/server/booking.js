"use server";

import { authOptions } from "@/lib/AuthOptions";
import { Collections, dbConnect } from "@/lib/dbConnect";
import { bookingInvoiceTemplate } from "@/lib/invoiceTemplete";
import { sendEmail } from "@/lib/SendEmail";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const createBooking = async ({ bookingData }) => {
  const {
    duration,
    region,
    district,
    upazila,
    address,
    totalCost,
    Service_Name,
  } = bookingData;

  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  const newBooking = {
    duration,
    region,
    district,
    upazila,
    address,
    totalCost,
    email: user?.email,
    status: "pending",
    createdAt: new Date(),
    Service_Name,
  };

  const createResult = await dbConnect(Collections.Booking).insertOne(
    newBooking,
  );

  if (createResult?.insertedId) {
    await sendEmail({
      to: user.email,
      subject: "Your Booking Invoice - Care.xyz",
      html: bookingInvoiceTemplate({
        bookingId: createResult.insertedId.toString(),
        Service_Name,
        duration,
        region,
        district,
        upazila,
        address,
        totalCost,
        email: user.email,
        createdAt: newBooking.createdAt,
      }),
    });
  } else {
    console.log("data dokche na somossa ace code e");
  }

  return { success: !!createResult.insertedId };
};
export const getmyBooking = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = { email: user?.email };
  const findBooking = await dbConnect(Collections.Booking)
    .find(query)
    .toArray();
  const Getbook = findBooking.map((book) => ({
    ...book,
    _id: book._id.toString(),
  }));

  return Getbook;
});

export const UpdateBooking = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = { _id: new ObjectId(id) };
  const updatedata = {
    $set: {
      status: "cancelled",
    },
  };
  const result = await dbConnect(Collections.Booking).updateOne(
    query,
    updatedata,
  );
  if (result.acknowledged) {
    revalidatePath("/mybooking");
    return { success: true };
  }
  return { success: result.acknowledged > 0 };
};
export const DeleteBooking = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = { _id: new ObjectId(id) };
  const result = await dbConnect(Collections.Booking).deleteOne(query);
  if (result.acknowledged) {
    revalidatePath("/mybooking");
    return { success: true };
  }
  return { success: result.acknowledged };
};
