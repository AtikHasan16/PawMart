import React from "react";
import { useLoaderData } from "react-router";
import ListingCard from "../Shared/LstingCard";

const RecentProducts = () => {
  const { data } = useLoaderData();
  //console.log(data);

  return (
    <div className="my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
        Recent Items
      </h2>

      {data.length === 0 ? (
        <div>
          <div className="md:my-40">
            <h1 className="text-center text-4xl text-secondary/50 font-bold">
              No Items Found
            </h1>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {data.map((listing) => (
            <ListingCard key={listing._id} listing={listing}></ListingCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentProducts;
