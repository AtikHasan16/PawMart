import React from "react";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Container";
import Category from "../Components/Home/Categories";
import RecentProducts from "../Components/Home/RecentProducts";
import ExtraSections from "../Components/Home/ExtraSections";

const Home = () => {
  return (
    <>
      <Container className={"sand"}>
        <header className="p-3">
          <Banner></Banner>
        </header>
        <main>
          <div>
            <Category></Category>
          </div>
          <div>
            <RecentProducts></RecentProducts>
          </div>
          <div>
            <ExtraSections></ExtraSections>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
