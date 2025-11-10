import React from "react";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Container";
import Category from "../Components/Home/Categories";
import RecentProducts from "../Components/Home/RecentProducts";
import ExtraSections from "../Components/Home/ExtraSections";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; // 1. Import motion
const Home = () => {
  const motionProps = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };
  return (
    <>
      <title>Home</title>
      <Container className={"sand"}>
        <header className="p-3">
          <Banner></Banner>
        </header>
        <main>
          <motion.div {...motionProps}>
            <Category></Category>
          </motion.div>
          <motion.div {...motionProps}>
            <RecentProducts></RecentProducts>
          </motion.div>
          <motion.div {...motionProps}>
            <ExtraSections></ExtraSections>
          </motion.div>
        </main>
      </Container>
    </>
  );
};

export default Home;
