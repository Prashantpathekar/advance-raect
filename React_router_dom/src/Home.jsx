import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const okk = () => {
    navigate("/about");
  };

  return (
    <>
      <h1>Home Page</h1> <br /><br />
  <button onClick={okk}>Go to the About page</button>

    </>
  );
};

export default Home;
