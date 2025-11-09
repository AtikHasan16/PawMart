import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListingCard from "../Components/Shared/LstingCard";
import Container from "../Components/Container";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/all-products/${categoryName}`).then((data) => {
      setData(data.data);
    });
  }, [categoryName]);

  console.log(data);

  return (
    <div className="my-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {data.map((listing) => (
            <ListingCard key={listing._id} listing={listing}></ListingCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryProducts;
