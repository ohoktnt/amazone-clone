import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") // go to users table
        .doc(user?.uid) // take id from auth
        .collection("orders") // get ordesrs for that user
        .orderBy("created", "desc") // inside this collection, order it
        .onSnapshot((snapshot) => {
          // take the current view on collection
          setOrders(
            snapshot.docs.map((doc) => ({
              // creates an array with the object of data
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
