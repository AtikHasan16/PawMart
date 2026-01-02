import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListingCard from "../Components/Shared/LstingCard";
import Container from "../Components/Container";
import { Typewriter } from "react-simple-typewriter";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(
      `https://paw-mart-server.vercel.app/all-products/category/${categoryName}`
    ).then((data) => {
      setData(data.data);
    });
  }, [categoryName]);

  return (
    <div className=" min-h-[calc(100dvh-400px)] sand my-6">
      <title>Category-Products</title>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8  bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
        <Typewriter words={["Filtered by Category"]} />
      </h2>
      <Container>
        {data.length === 0 ? (
          <div className="my-20 flex content-center justify-center">
            <h1 className="text-center text-4xl text-gray-500 font-bold">
              No Items Found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {data.map((listing) => (
              <ListingCard key={listing._id} listing={listing}></ListingCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategoryProducts;
