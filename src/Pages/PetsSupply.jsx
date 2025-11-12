import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ListingCard from "../Components/Shared/LstingCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; // 1. Import motion
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";
import { PulseLoader, SyncLoader } from "react-spinners";
const PetsSupply = () => {
  const { data } = useLoaderData();
  const [searchData, setSearchData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const motionProps = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === "All") {
      setLoading(true);
      axios(`https://paw-mart-server.vercel.app/all-products`)
        .then((data) => {
          setSearchData(data.data);
          // console.log(data.data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.code);
          console.log(error);
          setLoading(false);
        });
      return;
    }

    setLoading(true);
    axios(
      `https://paw-mart-server.vercel.app/all-products/category/${category}`
    )
      .then((data) => {
        setSearchData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearchField = (e) => {
    e.preventDefault();
    setLoading(true);
    const searchText = e.target.search.value;
    axios(`https://paw-mart-server.vercel.app/search?search=${searchText}`)
      .then((data) => {
        setSearchData(data.data);
        // console.log(data.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="my-10 sand">
      <title>Pets-Supply</title>

      <Container>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-10 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary ">
            <Typewriter words={["Find your Pets & Supply"]} />
          </h2>
        </div>
        <div className="text-center flex items-center justify-between md:pb-10 flex-col md:flex-row">
          <form onSubmit={handleSearchField} className=" flex-1/2 w-full px-5 ">
            <div className=" ">
              <label className="input   md:input-xl w-full bg-primary text-secondary rounded-full relative ">
                <FaMagnifyingGlass></FaMagnifyingGlass>
                <input
                  type="search"
                  name="search"
                  placeholder="Search your Items"
                />
                <button className="btn btn-sm md:btn-lg absolute  right-1">
                  {loading ? (
                    <span className="flex gap-2 items-end font-bold md:text-xl">
                      <PulseLoader size={6} />
                    </span>
                  ) : (
                    <span className="font-bold md:text-xl">Search</span>
                  )}
                </button>
              </label>
            </div>
          </form>
          {/* Category Dropdown */}
          <div className="flex-1/2 flex justify-center md:justify-end w-full mt-4">
            <select
              name="category"
              className="select md:select-xl rounded-full bg-primary text-secondary"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="All">All</option>
              <option value="Pets">Pets (Adoption)</option>
              <option value="Pet Food">Pet Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Pet Care Products">Pet Care Products</option>
            </select>
          </div>
        </div>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div>
            {searchData.length === 0 ? (
              <div className="md:my-40">
                <h1 className="text-center text-4xl text-gray-500 font-bold min-h-[calc(100dvh-500px)] content-center">
                  No Items Found
                </h1>
              </div>
            ) : (
              <motion.div
                {...motionProps}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 "
              >
                {searchData.map((listing) => (
                  <ListingCard
                    key={listing._id}
                    listing={listing}
                  ></ListingCard>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default PetsSupply;
