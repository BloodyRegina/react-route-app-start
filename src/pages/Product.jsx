import React from "react";
import { NavLink } from "react-router-dom";
const Product = () => {
  let products = [
    { id: 0, name: "Cake", price: 1000 },
    { id: 1, name: "Cookie", price: 200 },
    { id: 2, name: "Pasta", price: 150 },
    { id: 3, name: "Donut", price: 50 },
  ];

  return (
    <>
      <h1>Product</h1>
      <hr />
      <table border={1} style={{width: "100%"}}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Detail</th>
        </tr>
        {
            products.map((p) =>(
                <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <NavLink to={"/product/"+p.id}>[Detail]</NavLink>
                </tr>
            ))
        }
      </table>
    </>
  );
};

export default Product;
