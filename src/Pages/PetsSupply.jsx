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
  const motionProps = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const handleSearchField = (e) => {
    e.preventDefault();
    setLoading(true);
    const searchText = e.target.search.value;
    axios(`http://localhost:3000/search?search=${searchText}`)
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary ">
            <Typewriter words={["Find your Pets & Supply"]} />
          </h2>
        </div>
        <form
          onSubmit={handleSearchField}
          className="pb-10 flex justify-center"
        >
          <label className="input input-xl w-8/12   rounded-full relative ">
            <FaMagnifyingGlass></FaMagnifyingGlass>
            <input
              type="search"
              name="search"
              placeholder="Search your Items"
            />
            <button className="btn absolute  right-2">
              {loading ? (
                <span className="flex gap-2 items-end font-bold text-xl">
                  Searching <PulseLoader size={8} />
                </span>
              ) : (
                <span className="font-bold text-xl">Search</span>
              )}
            </button>
          </label>
        </form>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div>
            {data.length === 0 ? (
              <div className="md:my-40">
                <h1 className="text-center text-4xl text-secondary/50 font-bold">
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
