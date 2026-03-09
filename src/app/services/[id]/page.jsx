import { getSingleService } from "@/app/action/server/service";
import BookNowBtn from "@/Components/Buttons/BookNowBtn";
import ClientReview from "@/Components/Pages/ClientReview";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const page = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
        {/* Image Section */}
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={service?.image}
            alt={service?.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary p-3 font-semibold shadow-md">
              Top Rated
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            {service?.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            {service?.description}
          </p>

          <div className="flex items-center gap-3 bg-primary/5 w-fit px-4 py-2 rounded-lg">
            <span className="text-4xl font-black text-primary">
              ৳{service?.price_per_hour}
            </span>
            <span className="text-slate-500 font-medium text-lg">/ hour</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <MdOutlineRateReview className="text-primary" /> Service Features
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2">
                ✔ Professional caregiver
              </li>
              <li className="flex items-center gap-2">✔ Background verified</li>
              <li className="flex items-center gap-2">✔ Flexible hours</li>
              <li className="flex items-center gap-2">✔ Emergency support</li>
              <li className="flex items-center gap-2">✔ Safe & reliable</li>
              <li className="flex items-center gap-2">✔ 24/7 Monitoring</li>
            </ul>
          </div>

          <div className="pt-4">
            <BookNowBtn id={service?._id} />
          </div>
        </div>
      </div>

      <hr className="border-slate-100 mb-16" />

      <ClientReview service={service}></ClientReview>
    </div>
  );
};

export default page;
