import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useFirebase } from "../context/Firebase";
// import Login from "./Login";

import {
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
 
} from "firebase/firestore";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const firebase = useFirebase();
  const firestore = getFirestore();

  // const [name,setName] = useState("");
  // const [date,setDate] = useState("");
  // const [productName,setProductName] = useState("");
  // const [productPrice,setProductPrice] = useState("");
  // const [productQty,setProductQty] = useState("");


  const deleteItems = async (deleteItem) => {
    const docRef = firebase.getCollectionReference(firestore, "store");
    const querySnapShot = await getDocs(docRef);
    querySnapShot.forEach(async (docSnap) => {
      if (docSnap.id === deleteItem) {
        await deleteDoc(doc(firestore, "store", deleteItem)).then(() => {
          window.location.reload();
        });
      }
    });
  };
  const editItems = async (id) => {
    const docRef = firebase.getCollectionReference(firestore, "store");
    const querySnapShot = await getDocs(docRef);
    querySnapShot.forEach( (docSnap) => {
      if (docSnap.id === id) {
        const obj = docSnap.data()
       firebase.setUserUpdate(obj)
      }
    });
  };


  return (
    // <div>
    // {firebase.isLoggedIn ? (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <b>Customer Details</b>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Customer Name: {props.name}</ListGroup.Item>
        <ListGroup.Item>Date: {props.date}</ListGroup.Item>
        <ListGroup.Item>Product Name: {props.productName}</ListGroup.Item>
        <ListGroup.Item>Product Price: {props.productPrice}</ListGroup.Item>
        <ListGroup.Item>Product Quantity: {props.productQty}</ListGroup.Item>
      </ListGroup>
      <Button variant="danger" onClick={() => deleteItems(props.id)}>
        Delete
      </Button >
      
        <Link
        variant="info"
        to={`/update/${props.id}`}
        onClick={() => editItems(props.id)}
        >
        <Button style={{ width: "18rem" }}>
        Edit
        </Button>
        </Link>
      
    </Card>
    // ):(

    //   <Login />

    // )}
    // </div>
  );
};

export default Cards;
