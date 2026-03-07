import React from "react";

const ServicesCard = ({ service }) => {
  const { name, description, price_per_hour, image } = service;

  // Shorten description to ~80 characters
  const shortDesc =
    description.length > 80 ? description.slice(0, 77) + "..." : description;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-1">{shortDesc}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-blue-600">
            ${price_per_hour}/hr
          </span>
          <button className="btn btn-outline btn-sm">Details</button>
          <button className="btn btn-primary btn-sm">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
