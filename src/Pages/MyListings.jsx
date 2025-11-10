import React, { use, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import Container from "../Components/Container";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyListings = () => {
  const { currentUser } = use(AuthContext);
  const [listingsData, setListingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:3000/all-products/user/${currentUser.email}`)
      .then((data) => {
        setListingsData(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentUser.email]);

  if (loading || !listingsData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      theme: "dark",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/all-products/${id}`)
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              theme: "dark",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data.data);
            setListingsData(listingsData.filter((data) => data._id !== id));
          })
          .catch((error) => {
            toast.error(error.code);
          });
      }
    });
  };

  return (
    <div>
      <title>My-Listings</title>
      <Container>
        <div className="min-h-screen p-4 md:p-12  text-secondary sand">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
              My Listings
            </h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto bg-primary rounded-2xl shadow-lg">
              <table className="table w-full text-secondary">
                {/* head */}
                <thead className="text-secondary/80  text-sm">
                  <tr className="border-b border-secondary">
                    <th>Product Image</th>
                    <th className="">Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listingsData.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-800/50">
                      <td>
                        <div className="avatar">
                          <div className="w-20 rounded-xl">
                            <img src={product.image} />
                          </div>
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>৳ {product.Price}</td>
                      <td>{product.category}</td>
                      <td>{new Date(product.date).toLocaleDateString()}</td>
                      <td className="whitespace-pre-wrap max-w-xs">
                        {product.location}
                      </td>
                      <td>{product.email}</td>
                      <td>
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            to={`/update-listing/${product._id}`}
                            className="btn btn-sm btn-circle btn-info"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            className="btn btn-sm btn-circle btn-error"
                            onClick={() => {
                              handleDeleteData(product._id);
                            }}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyListings;
