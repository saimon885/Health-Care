import { Collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  const services = await dbConnect(Collections.Services).find().toArray();
  const sirializeService = services.map((service) => ({
    ...service,
    _id: service._id.toString(),
  }));
  return sirializeService;
};

export const getSingleService = async (id) => {
  if (!id || typeof id !== "string") {
    return null;
  }
  const query = { _id: new ObjectId(id) };
  const result = await dbConnect(Collections.Services).findOne(query);
  if (!result) return null;
  return {
    ...result,
    _id: result._id.toString(),
  };
};
