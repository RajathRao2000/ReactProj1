import Button from "../UI/Button";
import Input from "../UI/Input";

const Form = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e)
    let data = {
      categories: e.target[3].value,
      value: e.target[2].value,
      price: e.target[1].value,
      id: e.target[0].value,
    };
    if (localStorage.getItem(data.id)) {
      alert("product with this id already exists");
      return;
    }
    localStorage.setItem(data.id, JSON.stringify(data));
    props.onSubmit(data);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Input id="id" label="Product Id: " type="text" />
        <Input id="sellingPrice" label="Selling Price: " type="text" />
        <Input id="productName" label="Product Name: " type="text" />
        <label htmlFor="categories">Categories: </label>
        <select name="categories" id="categories">
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="skincare">Skincare</option>
        </select>
        <Button type="submit" label="Add Product" />
      </form>
    </>
  );
};

export default Form;
