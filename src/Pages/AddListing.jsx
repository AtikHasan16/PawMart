import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router"; // To redirect after submission

// Import your AuthContext to get the logged-in user
import AuthContext from "../Context/AuthContext"; // 1. Adjust this path

const AddListing = () => {
  const { currentUser } = useContext(AuthContext); // Get the logged-in user

  // State to manage the selected category for dynamic price logic
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddListing = async (e) => {
    e.preventDefault();
    const form = e.target;

    // 1. Collect all form data
    const newListing = {
      name: form.name.value,
      category: form.category.value,
      // If category is "Pets", price is 0, otherwise parse the input value
      Price: form.category.value === "Pets" ? 0 : parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: currentUser?.email, // Ensure email is from the logged-in user
      addedAt: new Date(), // Timestamp for when the listing was added
    };

    // 2. Send data to your server
    // Make sure your backend has an /add-listing route setup
    axios
      .post("http://localhost:5000/add-listing", newListing)
      .then((res) => {
        console.log(res);
        toast.success("Listing added successfully!");
        form.reset(); // Clear the form
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="min-h-screen p-4 md:p-12  text-secondary sand flex items-center">
      <div className="container max-w-3xl mx-auto bg-primary rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold  text-secondary mb-8 md:mb-12 text-center">
          Add New Listing
        </h1>

        <form onSubmit={handleAddListing} className="space-y-6">
          {/* Product / Pet Name */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="form-control  flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Product / Pet Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Golden Retriever Puppy, Royal Canin Dog Food"
                className="input input-bordered bg-primary text-secondary"
                required
              />
            </div>

            {/* Category Dropdown */}
            <div className="form-control  flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered bg-primary text-secondary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Pets">Pets (Adoption)</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Pet Care Products">Pet Care Products</option>
              </select>
            </div>
          </div>
          {/* Price (Conditional) */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="form-control flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Price (in BDT)
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder={
                  selectedCategory === "Pets"
                    ? "Price is 0 for Pets"
                    : "Enter price"
                }
                className="input input-bordered bg-primary text-secondary"
                value={selectedCategory === "Pets" ? 0 : undefined} // Controlled for Pets, uncontrolled otherwise
                readOnly={selectedCategory === "Pets"}
                min={0}
                step="0.01"
                required={selectedCategory !== "Pets"} // Only required if not a pet
              />
            </div>

            {/* Location */}
            <div className="form-control flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Location (City)
                </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Dhaka, Chattogram"
                className="input input-bordered bg-primary text-secondary"
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="form-control  flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Image URL
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="e.g., https://example.com/image.jpg"
                className="input input-bordered bg-primary text-secondary"
                required
              />
            </div>

            {/* Pickup Date */}
            <div className="form-control  flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Available From / Pickup Date
                </span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered bg-primary text-secondary"
                required
              />
            </div>
          </div>

          {/* Owner's Email (Read-only) */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="form-control flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Your Email (Owner)
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={currentUser?.email || ""}
                readOnly
                className="input input-bordered bg-primary text-secondary cursor-not-allowed"
                required
              />
            </div>
            {/* Description */}
            <div className="form-control flex-1/2">
              <label className="label">
                <span className="label-text my-2 text-secondary">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                placeholder="Tell us about the pet or product..."
                className="textarea textarea-bordered h-24 bg-primary text-secondary"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-8 t">
            <button type="submit" className="btn font-bold btn-block">
              Add Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
