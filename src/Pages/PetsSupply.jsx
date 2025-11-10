import React from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ListingCard from "../Components/Shared/LstingCard";

const PetsSupply = () => {
  const { data } = useLoaderData();

  return (
    <div className="my-10 sand">
      <title>Pets-Supply</title>
      <Container>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
            Find your Pets & Supply
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {data.map((listing) => (
            <ListingCard key={listing._id} listing={listing}></ListingCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PetsSupply;
