import React from "react";
import Container from "../Components/Container";
import {
  FaSearch,
  FaShippingFast,
  FaUndo,
  FaUserCircle,
  FaBoxOpen,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router";

const Support = () => {
  return (
    <div className="min-h-screen text-secondary py-12 transition-colors duration-300 sand">
      <Container>
        {/* Simple Hero with Search */}
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-4xl font-bold px-8 py-3 rounded-full inline-block bg-primary">
            Support Center
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto text-stroke leading-tight opacity-90">
            How can we help you today?
          </h2>

          <div className="max-w-xl mx-auto relative group">
            <input
              type="text"
              placeholder="Search for answers..."
              className="input input-bordered rounded-full w-full py-4 pl-12 pr-4 bg-transparent border-gray-400 focus:border-secondary focus:outline-none text-lg h-14 text-secondary placeholder:text-gray-500"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-secondary transition-colors" />
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            {
              icon: FaShippingFast,
              title: "Shipping",
              desc: "Track orders & delivery info",
            },
            { icon: FaUndo, title: "Returns", desc: "Policy & return process" },
            {
              icon: FaUserCircle,
              title: "Account",
              desc: "Manage profile & settings",
            },
            {
              icon: FaBoxOpen,
              title: "Products",
              desc: "Guides & product care",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-primary p-8 rounded-3xl shadow-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
            >
              <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="opacity-70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-primary px-6 py-2 rounded-full inline-block">
              Common Questions
            </h3>
            <div className="space-y-4">
              {[
                "How do I track my order?",
                "What is your return policy?",
                "Do you ship internationally?",
                "How can I change my shipping address?",
                "Are your products eco-friendly?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="collapse collapse-plus bg-primary rounded-2xl border border-gray-700"
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-lg font-medium">{q}</div>
                  <div className="collapse-content opacity-80">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-primary p-10 rounded-3xl border border-gray-700 text-center space-y-6 sticky top-24">
            <FaQuestionCircle
              size={48}
              className="mx-auto text-secondary opacity-80"
            />
            <h3 className="text-2xl font-bold">Still need help?</h3>
            <p className="opacity-70">
              Can't find what you're looking for? Our support team is here to
              assist you directly.
            </p>
            <Link to="/contact">
              <button className="btn w-full font-bold text-lg">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Support;
