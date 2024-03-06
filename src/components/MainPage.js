import Form from "./Form/Form";
import ProductDisplay from "./ProductsDisplay/ProductDisplay";
import { useState } from "react";
const MainPage = () => {
    const [ProductList,setProductList]=useState("")
    let onSubmitHandler=(data)=>{
        setProductList((p)=>[data,...p])
    }

  return (
    <>
      <Form onSubmit={onSubmitHandler} />
      <ProductDisplay ProductList={ProductList}/>
    </>
  );
};

export default MainPage;
