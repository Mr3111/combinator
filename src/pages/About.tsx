import { FC } from "react";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
