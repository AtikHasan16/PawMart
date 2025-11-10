import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaPaw, FaTag } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useParams } from "react-router";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";

const ProductDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const modalRef = useRef(null);
  const [pageDetails, setPageDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`https://paw-mart-server.vercel.app/all-products/${id}`)
      .then((data) => setPageDetails(data.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading || !pageDetails) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const { _id, name, category, Price, location, description, image, email } =
    pageDetails;
  const isPet = category === "Pets";
  const buttonText = isPet ? "Adopt" : "Order Now";
  const ButtonIcon = isPet ? FaPaw : FaShoppingCart;

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productId = _id;
    const buyerName = e.target.name.value;
    const buyerEmail = e.target.email.value;
    const quantity = form.quantity.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const additionalNotes = form.notes.value;

    const orderData = {
      productId: productId,
      productName: name,
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      quantity: quantity,
      price: Price,
      address: address,
      phone: phone,
      date: date,
      additionalNotes: additionalNotes,
    };

    //console.log(orderData);

    axios
      .post("https://paw-mart-server.vercel.app/orderData", orderData)
      .then((date) => {
        //console.log(date.data);
        if (date.data.insertedId) {
          toast.success("Order Request submitted");
          e.target.reset();
        }
      })
      .catch((err) => {
        //console.log(err);
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-screen p-4 md:p-12  text-secondary sand">
      <div className="container max-w-7xl mx-auto">
        {/* We use card-side for the two-column layout on desktop */}
        <div className="card rounded-2xl lg:card-side bg-gray-800 shadow-2xl">
          {/* Column 1: Image */}
          <figure className="lg:w-1/2">
            <img
              src={image}
              alt={`Image of ${name}`}
              className="w-full h-96 lg:h-full object-cover"
            />
          </figure>

          {/* Column 2: Details */}
          <div className="card-body lg:w-1/2 p-6 md:p-10">
            {/* Category */}
            <div className="flex items-center gap-2 text-sm text-secondary">
              <BiCategory />
              <span className="font-semibold">{category}</span>
            </div>

            {/* Name */}
            <h1 className="card-title text-3xl md:text-4xl outfit font-bold text-secondary my-2">
              {name}
            </h1>
            {/* Owner's Email */}
            <div className="flex items-center gap-2 text-sm text-secondary mb-4">
              <MdOutlineEmail />
              <span>Listed by: {email}</span>
            </div>

            {/* Description */}
            <p className="mb-4 text-secondary/90 text-base">{description}</p>

            <div className="divider before:bg-secondary/20 after:bg-secondary/20"></div>

            {/* Price & Location */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              {/* Price */}
              <div className="flex items-center gap-2">
                <FaTag className="text-xl text-secondary" />
                <span className="text-2xl outfit font-bold">
                  {Price === 0 ? "Free for Adoption" : `৳${Price}`}
                </span>
              </div>
              {/* Location */}
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-xl text-secondary" />
                <span className="text-lg outfit">{location}</span>
              </div>
            </div>

            {/* Action Button (This is where your modal will open) */}
            <div className="card-actions justify-end mt-4">
              {/* This button will use your custom .btn style */}
              <button className="btn w-full lg:w-auto" onClick={handleModal}>
                <ButtonIcon />
                {buttonText}
              </button>
            </div>

            {/* Modal form */}
            {/* Open the modal using showModal() method */}

            {/* ---------------------------------------------------
  Order Modal
  ---------------------------------------------------
  - Attached to the `modalRef`
  - Assumes `pageDetails` and `user` objects are available
  - `isPet` and `displayPrice` logic is from your ProductDetails page
*/}
            <dialog
              ref={modalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-gray-800 text-secondary sand max-w-3xl">
                <h3 className="font-bold text-2xl outfit text-secondary mb-4">
                  Confirm Your Order
                </h3>

                {/* This is the main form for submitting the order */}
                <form onSubmit={handleOrderSubmit}>
                  {/* --- READ-ONLY DETAILS --- */}
                  <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Buyer Name */}
                    <div className="">
                      <label className="label">
                        <span className="label-text text-secondary">
                          Buyer Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={currentUser.displayName || ""}
                        readOnly
                        className="input w-full bg-gray-800 text-secondary"
                      />
                    </div>

                    {/* Email */}
                    <div className="">
                      <label className="label">
                        <span className="label-text text-secondary">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={currentUser.email || ""}
                        readOnly
                        className="input w-full bg-gray-800 text-secondary"
                      />
                    </div>

                    {/* Product Name */}
                    <div className="">
                      <label className="label">
                        <span className="label-text text-secondary">
                          Product
                        </span>
                      </label>
                      <input
                        type="text"
                        value={pageDetails.name}
                        readOnly
                        className="input w-full bg-gray-800 text-secondary"
                      />
                    </div>

                    {/* Price */}
                    <div className=" flex flex-col">
                      <label className="label">
                        <span className="label-text text-secondary">Price</span>
                      </label>
                      <input
                        type="text"
                        value={Price} // Use the logic from your page
                        readOnly
                        className="input w-full bg-gray-800 text-secondary"
                      />
                    </div>
                  </fieldset>

                  <div className="divider before:bg-secondary/20 after:bg-secondary/20"></div>

                  {/* --- USER-INPUT FIELDS --- */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div className="">
                      <label className="label">
                        <span className="label-text text-secondary">
                          Quantity
                        </span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        defaultValue={isPet ? 1 : ""} // Logic from your page
                        readOnly={isPet} // Logic from your page
                        min="1"
                        placeholder="Enter quantity"
                        required
                        className="input w-full bg-gray-800"
                      />
                    </div>

                    {/* Date (pick up) */}
                    <div className="">
                      <label className="label">
                        <span className="label-text text-secondary">
                          Pickup Date
                        </span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        className="input w-full bg-gray-800"
                      />
                    </div>
                  </div>

                  <div className=" flex justify-between gap-4 items-center">
                    {/* Phone */}
                    <div className="flex-1/2">
                      <div className=" flex flex-col my-4">
                        <label className="label">
                          <span className="label-text text-secondary">
                            Phone Number
                          </span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your contact number"
                          required
                          className="input w-full bg-gray-800"
                        />
                      </div>

                      {/* Address */}
                      <div className=" flex flex-col ">
                        <label className="label">
                          <span className="label-text text-secondary">
                            Full Address
                          </span>
                        </label>
                        <input
                          name="address"
                          className="input w-full bg-gray-800"
                          placeholder="Your full shipping/pickup address"
                          required
                        ></input>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className=" flex-1/2">
                      <label className="label">
                        <span className="label-text text-secondary">
                          Additional Notes (Optional)
                        </span>
                      </label>
                      <textarea
                        name="notes"
                        className="textarea w-full textarea-bordered bg-gray-800"
                        placeholder="Any special instructions?"
                      ></textarea>
                    </div>
                  </div>
                  {/* --- MODAL ACTIONS --- */}
                  <div className="modal-action mt-6">
                    {/* This is the main submit button for your order.
          It is inside the <form onSubmit={...}> so it will trigger the function.
        */}
                    <button type="submit" className="btn outfit">
                      Confirm {isPet ? "Adoption" : "Order"}
                    </button>

                    <button
                      type="button"
                      onClick={() => modalRef.current.close()}
                      className="btn btn-ghost text-secondary"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
