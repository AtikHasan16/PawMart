import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="min-h-screen sand text-secondary transition-colors duration-300">
      {/* Simple Hero Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <h1 className=" text-4xl font-bold lg:text-4xl bg-primary px-8 py-2 rounded-full">
              We Care for Your{" "}
              <span className="text-secondary ">Pets</span> Like
              Family
            </h1>
            <p className=" text-lg opacity-80 max-w-2xl mx-auto text-amber-500">
              At PawMart, we believe every pet deserves the best. We connect
              loving owners with top-quality supplies and a community that
              cares.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/pets-supply">
                <button className="btn px-8 py-3 font-semibold shadow-sm hover:brightness-105 transition-all cursor-pointer">
                  Explore Shop
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story - Clean Split Layout */}
      <Container>
        <section className="py-16 bg-primary text-secondary rounded-2xl p-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2686&auto=format&fit=crop"
                alt="Our Story"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className=" text-3xl font-bold">From Passion to Purpose</h2>
              <p className=" text-lg leading-relaxed text-secondary">
                Founded in 2024, PawMart started with a simple idea: that pets
                are family. What began as a small passion project has grown into
                a community-driven platform dedicated to the well-being of your
                furry friends. We meticulously curate every product to ensure
                safety, durability, and happiness.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Why Choose Us - Simple Cards */}
      <section className="py-6">
        <Container>
          <div className="text-center mb-12">
            <h2 className=" text-3xl font-bold text-secondary w-fit mx-auto bg-primary px-8 py-2 rounded-full">
              Why Choose PawMart?
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Premium Quality",
                desc: "Only the best for your pets.",
              },
              {
                title: "Compassionate Care",
                desc: "Driven by empathy and love.",
              },
              {
                title: "Community First",
                desc: "Supporting shelters and adoptions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-(--color-primary) p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-(--color-primary) dark:text-(--color-secondary)">
                  {item.title}
                </h3>
                <p className="opacity-75 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Simple Stats Bar */}
      <section className="py-12 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5k+", label: "Happy Pets" },
              { num: "200+", label: "Products" },
              { num: "99%", label: "Satisfaction" },
              { num: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold text-(--color-secondary)">
                  {stat.num}
                </h3>
                <p className="text-sm opacity-80 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export { AboutUs };
