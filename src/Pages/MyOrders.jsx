import React, { use, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import Container from "../Components/Container";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { currentUser } = use(AuthContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:3000/orderData/${currentUser.email}`)
      .then((data) => {
        setOrderData(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentUser.email]);

  if (loading || !orderData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDeleteData = (id) => {
    axios.delete(`http://localhost:3000/orderData/${id}`).then((data) => {
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
          Swal.fire({
            title: "Deleted!",
            theme: "dark",
            text: "Your file has been deleted.",
            icon: "success",
          });

          console.log(data.data);
          setOrderData(orderData.filter((data) => data._id !== id));
        }
      });
    });
  };
  const handleUpdateData = () => {};
  return (
    <div>
      <title>My-Orders</title>
      <Container>
        <div className="min-h-screen p-4 md:p-12  text-secondary sand">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
              My Orders
            </h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto bg-primary rounded-2xl shadow-lg">
              <table className="table w-full text-secondary">
                {/* head */}
                <thead className="text-secondary/80  text-sm">
                  <tr className="border-b border-secondary">
                    <th className="">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Pickup Date</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-800/50">
                      <td>{order.productName}</td>
                      <td>৳{order.price}</td>
                      <td>{order.quantity}</td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td className="whitespace-pre-wrap max-w-xs">
                        {order.address}
                      </td>
                      <td>{order.phone}</td>
                      <td className="flex items-center justify-center gap-2">
                        <button
                          className="btn btn-sm btn-circle btn-info"
                          onClick={() => {
                            handleUpdateData();
                          }}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-sm btn-circle btn-error"
                          onClick={() => {
                            handleDeleteData(order._id);
                          }}
                        >
                          <FaTrash />
                        </button>
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

export default MyOrders;
