import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
// import Login from "./Login";


const Update = () => {
  const firebase = useFirebase();
  const firestore = getFirestore();
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id)

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productQty, setProductQty] = useState();

  // console.log(firebase.userUpdate.name);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(firestore, "store", id);
    await updateDoc(docRef, {
      name: name ?? firebase.userUpdate.name,
      date: date?.toString() ?? firebase.userUpdate.date,
      productName: productName ?? firebase.userUpdate.productName,
      productPrice:
        productPrice?.toString() ?? firebase.userUpdate.productPrice,
      productQty: productQty?.toString() ?? firebase.userUpdate.productQty,
    })
      .then((response) => {
        alert("updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setName("");
    setDate("");
    setProductName("");
    setProductPrice("");
    setProductQty("");

    navigate("/history");
  };

  return (
    // <div>
    // {firebase.isLoggedIn ? (
    <div>
      <div className="container">
        <h1 className="text-center display-4">
          <b>Billing Form</b>
        </h1>
        <Form formAction="History.js" onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              required
              type="text"
              name="names"
              value={name ?? firebase.userUpdate.name}
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Order Date</label>
            <input
              required
              type="date"
              name="orderdate"
              value={date ?? firebase.userUpdate.date}
              className="form-control"
              placeholder="select date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input
              required
              type="text"
              name="pname"
              value={productName ?? firebase.userUpdate.productName}
              className="form-control"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              required
              type="number"
              name="uprice"
              value={productPrice ?? firebase.userUpdate.productPrice}
              className="form-control"
              placeholder="Enter Price"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Quantity</label>
            <input
              required
              type="number"
              name="pquantity"
              value={productQty ?? firebase.userUpdate.productQty}
              className="form-control"
              placeholder="Enter Quantity"
              onChange={(e) => setProductQty(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-3">
              Update Data
            </button>
          </div>
        </Form>
      </div>
    </div>
    //  ):(

    //   <Login />

    // )}
    // </div>
  );
};

export default Update;
