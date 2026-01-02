import React from "react";
import Container from "../Components/Container";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [23.8103, 90.4125]; // Dhaka coordinates

  return (
    <div className="min-h-screen text-secondary py-12 transition-colors duration-300 sand">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold px-8 py-3 rounded-full inline-block bg-primary">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-80 text-stroke">
            Have questions or just want to say hello? We are here to help you
            and your furry friends.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className=" p-8 rounded-3xl shadow-sm border border-gray-300 bg-primary">
            <h2 className="text-2xl font-bold mb-6 ">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold mb-2 ">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered rounded-full w-full bg-transparent border-gray-300 focus:border-(--color-secondary) focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold mb-2 ">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered rounded-full w-full bg-transparent border-gray-300 focus:border-(--color-secondary) focus:outline-none"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold mb-2  ">
                    Subject
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="input input-bordered rounded-full w-full bg-transparent border-gray-300 focus:border-(--color-secondary) focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold mb-2 ">
                    Message
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32 w-full bg-transparent border-gray-300 rounded-2xl focus:border-(--color-secondary) focus:outline-none"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button className="btn w-full text-lg font-bold">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 p-6 bg-primary  rounded-2xl shadow-sm border  ">
                <div className="p-3 bg-(--color-secondary)/20 rounded-xl">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="">
                  <h3 className="font-bold text-lg  ">Phone</h3>
                  <p className="text-sm opacity-70">+880 1234 567 890</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary  rounded-2xl shadow-sm border  ">
                <div className="p-3 bg-(--color-secondary)/20 rounded-xl">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg  ">Email</h3>
                  <p className="text-sm opacity-70">hello@pawmart.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary  rounded-2xl shadow-sm border  ">
                <div className="p-3 bg-(--color-secondary)/20 rounded-xl">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg  ">Location</h3>
                  <p className="text-sm opacity-70">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary  rounded-2xl shadow-sm border  ">
                <div className="p-3 bg-(--color-secondary)/20 rounded-xl">
                  <FaClock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg  ">Hours</h3>
                  <p className="text-sm opacity-70">Daily: 9AM - 8PM</p>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-md border-4 border-white dark:border-(--color-primary)/20">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    PawMart HQ <br /> Dhaka, Bangladesh
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
