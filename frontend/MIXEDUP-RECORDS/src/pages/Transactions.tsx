import React, { useState } from "react";
import {TRANSACTIONS_URL} from "../components/dbURLS"
import RenderItem from "../components/RenderItem";
import { item } from "../components/RenderItem";
import { useEffect } from "react";





export default function Transactions() {
  const [transactionObject, setTransactionObject] = useState<TransactionObject>({
    bought: [],
    sold: []
  }) 
  
  type TransactionObject = {
    bought: item[],
    sold: item[]
  }

  function retrieve(){
    fetch(TRANSACTIONS_URL,{credentials: "include"})
    .then(response=> response.json())
    .then(data=> setTransactionObject(data))     
  }  
  
  useEffect(()=> retrieve(), [])
  console.log(transactionObject.bought)

  return <>
    <h2 className="inventory-headers">Inventory of Items I've Purchased</h2>
    <div className="results-container">
      {transactionObject.bought.map((item, index) => (
        <RenderItem key={index} item={item} transactionType="bought" />
      ))}
    </div>

    <h2 className="inventory-headers">Inventory of Items I've Sold</h2> 
    <div className="results-container">
      {transactionObject.sold.map((item, index) => (
        <RenderItem key={index} item={item} transactionType="sold" />
      ))}
    </div>
  </>
}

