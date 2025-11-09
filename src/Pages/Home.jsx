import React from "react";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Container";

const Home = () => {
  return (
    <>
      <Container className={'sand'}>
        <header>
          <Banner></Banner>
        </header>
      </Container>
    </>
  );
};

export default Home;
