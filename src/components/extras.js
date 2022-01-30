import React from "react";
import { FaRegCircle } from "react-icons/fa";


export default function Extras({ type, items }) 
{

  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>

      
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="extras-name">{item.name}</div>
          <strong className="extras-price">₹{item.price} &nbsp; </strong>
          { item.isVeg=="yes" ? <FaRegCircle style={{color:"#72ba14",backgroundColor:"#72ba14"}}></FaRegCircle>  : <FaRegCircle style={{color:"#450b07",backgroundColor:"#450b07"}}></FaRegCircle>}
        </article>
      ))}
    </section>
  );
}
