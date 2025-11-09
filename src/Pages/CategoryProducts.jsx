import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/category-products/${categoryName}`).then(
      (data) => {
        setData(data.data);
      }
    );
  }, [categoryName]);

  console.log(data);

  return <div>{data.length}</div>;
};

export default CategoryProducts;
