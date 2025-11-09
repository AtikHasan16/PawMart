import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const [pageDetails, setPageDetails] = useState({});

  useEffect(() => {
    axios(`http://localhost:3000/all-products/${id}`).then((data) =>
      setPageDetails(data.data)
    );
  }, [id]);
  console.log(pageDetails);
  return <div>{pageDetails.name}</div>;
};

export default ProductDetails;
