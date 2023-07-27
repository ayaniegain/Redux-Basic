import { React, useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Product() {
  const dispatch=useDispatch()

  
  const {data: products,status}=useSelector(state=>state.product)

 let Handleclick=(product)=>{
    dispatch(add(product))

  }

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  if (status==="loading") {
    return <p>Loading...</p>
  }

  if (status==="failed") {
    return <p>ERROR something went wrong...</p>
  }

  let card=products.map((prod, index) => (
    <div  key={index}>
        <img style={{height:"200px",width:"200px"}} src={prod.image} alt={prod.id} />
    <h2>{prod.title}</h2>
    <h2>{prod.price}</h2>
    <button onClick={()=>Handleclick(prod)}>add</button>
    </div>
  ))

  return (
    <>
      {card}
    </>
  );
}

export default Product;
