import React from "react";
import { Link } from "react-router";
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { FaTag } from "react-icons/fa";

const ListingCard = ({ listing }) => {
  // Destructure the props for easy access
  const { _id, name, category, Price, location, image } = listing;

  // Conditional logic for the price display
  const displayPrice =
    category === "Pets" || Price === 0 ? "Free for Adoption" : `৳${Price}`;

  return (
    <div className="card card-compact rounded-2xl h-full bg-primary text-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-gray-800 sand">
      <figure>
        <img
          src={image}
          alt={`Image of ${name}`}
          className="h-60 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* Name */}
        <h2 className="card-title text-2xl outfit">{name}</h2>

        {/* Info Section with Icons */}
        <div className="space-y-2 mt-2">
          {/* Category */}
          <div className="flex items-center gap-2">
            <BiCategory className="text-secondary/80" />
            <span className="text-md">{category}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-secondary/80" />
            <span className="text-md">{location}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <FaTag className="text-secondary/80" />
            <span className="text-lg font-bold">{displayPrice}</span>
          </div>
        </div>

        {/* "See Details" Button */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product-details/${_id}`} // Navigates to the dynamic details page
            className="btn outfit" // This will use your custom .btn style
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
