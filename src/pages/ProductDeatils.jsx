import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetails = () => {
const params = useParams();
let products = [
{ id: 0, name: "Cake", price: 1000, },
{ id: 1, name: "Cookie", price: 2000, },
{ id: 2, name: "Pastry", price: 3000, },
{ id: 3, name: "Donut", price: 4000, },
]
const navigate = useNavigate()
const goBack = () => {
navigate("/product")
}
return (
<>
<h1>ProductDetail</h1>
<hr />
<p>Product ID: {params.id}</p>
<p>Name: {products[params.id].name}</p>
<p>Price: {products[params.id].price}</p>
<button onClick={goBack}>Back</button>
</>
);
};
export default ProductDetails;