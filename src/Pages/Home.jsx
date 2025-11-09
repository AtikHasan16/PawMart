import React from "react";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Container";
import Category from "../Components/Home/Categories";

const Home = () => {
  return (
    <>
      <Container className={'sand'}>
        <header>
          <Banner></Banner>
        </header>
        <main>
        
          <Category></Category>
        </main>
      </Container>
    </>
  );
};

export default Home;
