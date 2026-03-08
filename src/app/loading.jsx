import { FaHeartbeat } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

export default function loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center">
      {/* Icon Animation */}
      <div className="relative flex items-center justify-center">
        <MdLocalHospital className="text-6xl text-primary animate-pulse" />

        <FaHeartbeat className="text-red-500 text-3xl absolute -right-4 -top-2 animate-bounce" />
      </div>

      {/* Text */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary">
          Preparing Care Services
        </h2>

        <p className="text-gray-500">
          Our caregivers are getting things ready for you...
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}
