import Button from "../UI/Button";
import { useEffect, useState } from "react";

const ProductDisplay = (props) => {
    console.log(props)

    const[products,setProducts]=useState("")

    const deleteProduct=(e)=>{
        e.preventDefault();
        console.log(e)
        console.log(e.target.previousSibling.data)
        localStorage.removeItem(e.target.previousSibling.data)
        renderList()
    }

    const renderList=()=>{
        let list = [];

        Object.keys(localStorage).forEach((ele) => {
            let temp = JSON.parse(localStorage.getItem(ele));
            list.push(
              <li key={temp.id}>
                {temp.price}-{temp.value}-{temp.id}
                <Button type="button" label="Delete Product" onClick={(e)=>deleteProduct(e)}/>
              </li>
            );
          });
          setProducts(list)
    }

    useEffect(()=>{
        renderList()
    },[products])


  return (
    <>
      <ul>{products.length !== 0 ? products : "No data found"}</ul>
    </>
  );
};

export default ProductDisplay;
