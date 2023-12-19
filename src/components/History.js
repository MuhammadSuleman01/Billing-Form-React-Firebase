import React,{useEffect, useState} from 'react';
import {useFirebase} from "../context/Firebase";
import Card from "../components/Cards";
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Login from "./Login";

const History = () => {
const firebase = useFirebase();

const [store,setStore] = useState([]);


useEffect(()=>{
    firebase.listAllItems().then((store) => setStore(store.docs));
  }, [firebase]);


    return (
    //   <div>
    // {firebase.isLoggedIn ? (
    <div className="container">
    <h1 className="text-center display-4">
      <b>See Customers History</b>
    </h1>
    <div className='container ms-1' >
    <Row xs={1} md={4} className="g-4">
         { store.map((stor) => (
            <Col key={stor.id}>
         <Card key={stor.id}{...stor.data()} id={stor.id} />
         </Col>
   ))}
  </Row>
  </div>
    </div>
    // ):(

    //   <Login />

    // )}
    // </div>
  )
}

export default History
