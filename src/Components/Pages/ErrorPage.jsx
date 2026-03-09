
import React, { useEffect } from "react";
import { BiRefresh, BiHomeAlt, BiSupport } from "react-icons/bi";
import { VscBracketError } from "react-icons/vsc";
import Link from "next/link";
const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error("Critical Error:", error);
  }, [error]);

  return (
    <div>
      <div className="min-h-[85vh] flex items-center justify-center p-6 bg-base-100">
        <div className="max-w-xl w-full text-center">
          <div className="relative flex justify-center mb-8">
            <div className="absolute inset-0 bg-error/10 blur-3xl rounded-full scale-75 animate-pulse"></div>
            <div className="relative bg-error/10 p-6 rounded-2xl border border-error/20">
              <VscBracketError className="text-8xl text-error" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">
            System Interrupted
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Something went wrong on our end. We’ve been notified and are looking
            into it. Please try refreshing the page or head back to home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => reset()}
              className="btn btn-primary btn-lg flex items-center gap-2 shadow-lg hover:shadow-primary/30 px-8 transition-all duration-300"
            >
              <BiRefresh size={24} />
              Try Again
            </button>

            <Link
              href="/"
              className="btn btn-outline btn-lg flex items-center gap-2 border-slate-300 hover:bg-slate-50 px-8 transition-all duration-300"
            >
              <BiHomeAlt size={22} />
              Back Home
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
              Need urgent assistance?
            </p>
            <Link
              href="/support"
              className="flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <BiSupport size={18} />
              Contact Technical Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
