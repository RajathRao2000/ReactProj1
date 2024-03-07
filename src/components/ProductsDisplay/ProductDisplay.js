import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import styles from "./productDisplay.module.css"
const ProductDisplay = (props) => {
  const [products, setProducts] = useState([]);
  

  const deleteProduct = (id) => {
    localStorage.removeItem(id);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  useEffect(() => {
    const fetchData = () => {
      let list = [];
      Object.keys(localStorage).forEach((ele) => {
        let temp = JSON.parse(localStorage.getItem(ele));
        list.push({
          id: ele,
          price: temp.price,
          value: temp.value,
          categories: temp.categories,
        });
      });
      setProducts(list);
    };

    fetchData();
  }, [props]);

  return (
    <div className={styles.productListContainer}>
      <h2>Electronics</h2>
      <ul>
        {products.length !== 0 ? (
          products.map((product) => {
            let temp = [];
            console.log(product)
            if (product.categories == "electronics") {
              temp.push(
                <li key={product.id}>
                  {product.price}-{product.value}-{product.id}
                  <Button className={styles.button} type="button" label="Delete Product" onClick={() => deleteProduct(product.id)} />
                </li>
              );
            }
            return temp;
          })
        ) : (
          <p>No data found</p>
        )}
      </ul>

      <h2>Food</h2>
      <ul>
        {products.length !== 0 ? (
          products.map((product) => {
            let temp = [];
            console.log(product)
            if (product.categories == "food") {
              temp.push(
                <li key={product.id}>
                  {product.price}-{product.value}-{product.id}
                  <Button className={styles.button} type="button" label="Delete Product" onClick={() => deleteProduct(product.id)} />
                </li>
              );
            }
            return temp;
          })
        ) : (
          <p>No data found</p>
        )}
      </ul>

      <h2>Skincare</h2>
      <ul>
        {products.length !== 0 ? (
          products.map((product) => {
            let temp = [];
            console.log(product)
            if (product.categories == "skincare") {
              temp.push(
                <li key={product.id}>
                  {product.price}-{product.value}-{product.id}
                  <Button className={styles.button} type="button" label="Delete Product" onClick={() => deleteProduct(product.id)} />
                </li>
              );
            }
            return temp;
          })
        ) : (
          <p>No data found</p>
        )}
      </ul>

    </div>
  );
};

export default ProductDisplay;
