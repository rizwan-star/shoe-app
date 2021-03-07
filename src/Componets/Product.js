import React from "react";
import Shoes from "./../shoes.json";
import {Link} from "react-router-dom";



function Product() {

    console.log(Shoes)
  return (
    <div >

      <h1>product item</h1>
      <div className="productcontainer">
          {Object.keys(Shoes).map(keyName=>{
              const shoe = Shoes[keyName];
              return ( <Link key={keyName} className="link" to={`/Product/${keyName}`}>
                   <h4>{shoe.name}</h4>
                  <img src={shoe.img} height={200} alt="" />
              </Link>)
          })}
      </div>
    </div>
  );
}

export default Product;
