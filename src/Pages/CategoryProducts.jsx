import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListingCard from "../Components/Shared/LstingCard";
import Container from "../Components/Container";

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

  //console.log(data);

  return (
    <div className="my-10 min-h-[calc(100dvh-400px)] sand">
      <title>Category-Products</title>
      <Container>
        {data.length === 0 ? (
          <div className="my-20 flex content-center justify-center">
            <h1 className="text-center text-4xl text-primary/80 font-bold">
              No Items Found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
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
