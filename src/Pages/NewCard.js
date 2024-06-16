import React from "react";
import { Link } from "react-router-dom";
const Card = ({data}) => {
  return (
    <>
      <Link to={`/product/${data.id}`} className="img-wrap">
        <img src={data.image} height="300px" width="400px" alt="img"/>
        <h2>{data.title}</h2>
        <h3>price={data.price}</h3>
      </Link>
    </>
  )
}

export default Card
