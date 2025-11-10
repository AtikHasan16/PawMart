import React, { use, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import Container from "../Components/Container";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

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
  console.log(orderData);

  const generatePdf = () => {
    const doc = new jsPDF();
    const head = [
      [
        "Product",
        "Buyer Name",
        "Price",
        "Quantity",
        "Pickup Date",
        "Address",
        "Phone",
      ],
    ];
    const body = orderData.map((data) => [
      data.productName,
      data.buyerName,
      data.price,
      data.quantity,
      data.date,
      data.address,
      data.phone,
    ]);

    autoTable(doc, {
      head: head,
      body: body,
      startY: 20,
      theme: "grid",
    });
    doc.save("My-Orders.pdf");
  };

  return (
    <div>
      <title>My-Orders</title>
      <Container>
        <div className="min-h-screen p-4 md:p-12  text-secondary sand">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-primary rounded-full w-fit mx-auto py-4 px-6 text-secondary">
              <Typewriter words={["My Orders "]} />
            </h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto bg-primary rounded-2xl shadow-lg">
              <table className="table w-full text-secondary">
                {/* head */}
                <thead className="text-secondary/80  text-sm">
                  <tr className="border-b border-secondary">
                    <th className="">Product</th>
                    <th>Buyer Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Pickup Date</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-800/50">
                      <td>{order.productName}</td>
                      <td>{order.buyerName}</td>
                      <td>৳{order.price}</td>
                      <td>{order.quantity}</td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td className="whitespace-pre-wrap max-w-xs">
                        {order.address}
                      </td>
                      <td>{order.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {orderData.length === 0 ? (
            <div className="my-40">
              <h1 className="text-center text-4xl text-primary/80 font-bold">
                No Items Found
              </h1>
            </div>
          ) : (
            <div className=" text-center">
              <button
                className="btn my-6 "
                type="button"
                onClick={() => generatePdf()}
              >
                Download PDF
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
