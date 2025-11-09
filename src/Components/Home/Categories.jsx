import React from "react";
import { Link } from "react-router";
import { FaPaw, FaBone, FaTag, FaFirstAid } from "react-icons/fa";

// Array to hold the category data
const categories = [
  {
    name: "Pets (Adoption)",
    description: "Find your new best friend. Adopt a pet in need.",
    Icon: FaPaw, // react-icon component
    link: "/category-filtered-product/Pets",
    searchKeyword: "happy dog adoption", // Image search keyword
  },
  {
    name: "Pet Food",
    description: "Nutritious food and tasty treats for a healthy diet.",
    Icon: FaBone,
    link: "/category-filtered-product/Pet Food",
    searchKeyword: "aesthetic pet food bowl", // Image search keyword
  },
  {
    name: "Accessories",
    description: "Stylish collars, cozy beds, and fun toys.",
    Icon: FaTag,
    link: "/category-filtered-product/Accessories",
    searchKeyword: "modern pet accessories", // Image search keyword
  },
  {
    name: "Pet Care Products",
    description: "Shampoos, brushes, and health supplies to keep them well.",
    Icon: FaFirstAid,
    link: "/category-filtered-product/Pet Care Products",
    searchKeyword: "pet grooming supplies", // Image search keyword
  },
];

const Category = () => {


  



  return (
    <div className="py-15 md:py-10 sand">
      <div className="container max-w-7xl mx-auto px-4">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
          Shop by Category
        </h2>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="block group "
            >
              <div className="card h-full text-secondary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl shadow-gray-800 bg-primary rounded-2xl">
                <div className="card-body items-center text-center p-8">
                  {/* Icon */}
                  <category.Icon className="text-6xl mb-4 text-secondary/90 transition-transform duration-300 group-hover:rotate-[-15deg]" />

                  {/* Card Title */}
                  <h3 className="card-title text-2xl font-semibold text-secondary">
                    {category.name}
                  </h3>

                  {/* Card Description */}
                  <p className="text-secondary/80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
