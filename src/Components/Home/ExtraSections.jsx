import React from "react";
// We'll use icons to add some visual flair
import { FaHeart, FaQuoteLeft, FaShieldAlt, FaUser } from "react-icons/fa";

// --- Static Data for Pet Heroes ---
const petHeroes = [
  {
    name: "Anika Rahman",
    title: "Adopter & Volunteer",
    story:
      "Adopting 'Max' from a local shelter was the best decision. He's my loyal companion. Every pet deserves this chance.",
    imageKeyword: "woman with golden retriever",
  },
  {
    name: "Mr. & Mrs. Kabir",
    title: "Multi-Pet Rescuers",
    story:
      "Our home is full of rescues. Seeing them heal and trust again is the most rewarding experience. We found most of them on PawMart.",
    imageKeyword: "older couple with two cats",
  },
  {
    name: "Saima Islam",
    title: "First-Time Adopter",
    story:
      "I was nervous about adopting, but PawMart made it easy. My cat 'Misty' was shy at first, but now she's the queen of the house!",
    imageKeyword: "young woman holding a grey cat",
  },
  {
    name: "Dhaka Animal Aid",
    title: "Rescue Partner",
    story:
      "We partner with platforms like PawMart to find loving homes for animals in need. Adoption saves lives, period.",
    imageKeyword: "animal shelter volunteer team",
  },
];

const ExtraSections = () => {
  return (
    // This wrapper puts both sections on a contrasting background
    <div className="bg-accent py-16 md:py-24 sand text-secondary/90">
      <div className="container max-w-7xl mx-auto px-4">
        {/* === SECTION 1: Why Adopt from PawMart === */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-secondary mb-6">
              Why Adopt from PawMart?
            </h2>
            <p className="text-lg text-secondary/80 mb-4">
              When you adopt, you're not just getting a pet—you're saving a
              life. Millions of wonderful, deserving animals are waiting in
              shelters for a second chance.
            </p>
            <p className="text-lg text-secondary/80">
              Choosing adoption over buying helps fight pet overpopulation,
              supports your local community, and allows a grateful animal to
              find its forever home. With PawMart, you're connecting to that
              mission.
            </p>
          </div>
          <div className="shrink-0">
            {/* A simple visual icon */}
            <FaHeart className="text-9xl text-secondary/30" />
          </div>
        </div>

        {/* === SECTION 2: Meet Our Pet Heroes === */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center outfit text-secondary mb-12">
            Meet Our Pet Heroes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {petHeroes.map((hero) => (
              <div
                key={hero.name}
                className="card h-full bg-primary shadow-lg text-secondary"
              >
                <div className="card-body p-6">
                  {/* Image Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <FaUser className="text-5xl text-secondary/50" />
                    {/* Search for: "{hero.imageKeyword}" */}
                  </div>

                  <h3 className="text-xl font-bold text-center outfit">
                    {hero.name}
                  </h3>
                  <p className="text-sm text-center text-secondary/70 mb-4">
                    {hero.title}
                  </p>

                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 left-0 text-xl text-secondary/50" />
                    <p className="pl-6 text-sm italic text-secondary/80">
                      "{hero.story}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSections;
