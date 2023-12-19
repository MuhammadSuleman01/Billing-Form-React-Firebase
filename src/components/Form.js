import React, { useState } from 'react'
import {useFirebase} from "../context/Firebase";
// import Login from './Login';

const MyForm = () => {

const firebase = useFirebase();

const [name,setName] = useState("");
const [date,setDate] = useState("");
const [productName,setProductName] = useState("");
const [productPrice,setProductPrice] = useState("");
const [productQty,setProductQty] = useState("");



const handleSubmit = async (e) => {
  e.preventDefault();
   await firebase.handleCreateNewListing(name,date,productName,productPrice,productQty);
   setName("")
   setDate("")
   setProductName("")
   setProductPrice("")
   setProductQty("")

};


  return (
    // <div>
    // {firebase.isLoggedIn ? (
   
       
        <div className="container">
          <h1 className="text-center display-4">
            <b>Billing Form</b>
          </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              required
              type="text"
              name="names"
              value={name}
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
              value={date}
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
              value={productName}
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
              value={productPrice}
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
              value={productQty}
              className="form-control"
              placeholder="Enter Quantity"
              onChange={(e) => setProductQty(e.target.value)}
            />
             
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-3">Save Data</button>
          </div>
          </form>
          </div>
//           ):(

// <Login />

// )}
// </div>
       
  
  )
};

export default MyForm
