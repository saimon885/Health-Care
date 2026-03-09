"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiHomeAlt, BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <HiOutlineExclamationCircle className="text-9xl text-error opacity-20 animate-pulse" />
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary">
              404
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="btn btn-outline btn-primary flex items-center gap-2 px-6"
          >
            <BiArrowBack size={20} />
            Go Back
          </button>

          <Link
            href="/"
            className="btn btn-primary text-white flex items-center gap-2 px-6 shadow-lg hover:shadow-xl transition-all"
          >
            <BiHomeAlt size={20} />
            Back to Home
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
