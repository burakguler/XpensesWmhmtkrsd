import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
 

  return (
    <Card key={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₺{props.amount}</div>
        <button onClick={() => props.change(props)}>Değiştir</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
