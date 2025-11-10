import React from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ListingCard from "../Components/Shared/LstingCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; // 1. Import motion
const PetsSupply = () => {
  const { data } = useLoaderData();
  const motionProps = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };
  return (
    <div className="my-10 sand">
      <title>Pets-Supply</title>

      <Container>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
            <Typewriter words={["Find your Pets & Supply"]} />
          </h2>
        </div>
        <div className="pb-10 flex justify-center">
          <label className="input input-xl w-8/12   rounded-full ">
            <FaMagnifyingGlass></FaMagnifyingGlass>
            <input type="search" required placeholder="Search your Items" />
          </label>
        </div>
        <motion.div
          {...motionProps}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4"
        >
          {data.map((listing) => (
            <ListingCard key={listing._id} listing={listing}></ListingCard>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default PetsSupply;
