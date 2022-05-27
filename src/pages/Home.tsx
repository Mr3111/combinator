import { FC } from "react";
import { Link } from "react-router-dom";
import AppSteps from "../components/steps";

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <AppSteps />
    </div>
  );
};

export default Home;
