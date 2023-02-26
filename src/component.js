import React from "react";
import { Link } from 'react-router-dom';
function Hlink(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <h1
      className={`text-center  ${props.color}  ${isHovered ? "" : "text-opacity-75"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
    </h1>
  );
}

function Card(props) {
  return (
    <div className="card m-3 p-5 col-3 ">
      <Link to={props.to}><Hlink color={props.color}>{props.children}</Hlink></Link>
    </div>
  );
}
Card.defaultProps = {
  color: "text-dark",
};

export default Card;
