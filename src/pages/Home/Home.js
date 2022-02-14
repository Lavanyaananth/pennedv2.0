import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="heroContent">
        <div className="heroContent">
          <h1 className="heroTitle">It's a brand new day..!</h1>
          <h1 className="heroTitle">Start penning your thoughts.</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
