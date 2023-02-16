import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const {date, amount, id} = props;
  const [title, setTitle] = useState(props.title);
  const clickHandler = (event, id) =>{
    setTitle("Uppdated!");
    console.log("Clicked!!",event, event.target.id,id);
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={(e)=>clickHandler(e,id)}>Change title!</button>
    </Card>
  );
}

export default ExpenseItem;
