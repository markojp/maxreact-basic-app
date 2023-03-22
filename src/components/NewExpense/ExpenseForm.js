import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//   const [enteredExpense, setEnteredExpense] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // wrong way to update object
    // setEnteredExpense({
    //     ...enteredExpense, enteredTitle: event.target.value
    // });

    // correct way to update object using previous state
    // setEnteredExpense((prevState) => {
    //   return { ...enteredExpense, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // wrong way to update object
    // setEnteredExpense({
    //   ...enteredExpense,
    //   enteredAmount: event.target.value,
    // });

     // correct way to update object using previous state
    // setEnteredExpense((prevState) => {
    //     return { ...enteredExpense, enteredAmount: event.target.value };
    //   });

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
    // wrong way to update object
    // setEnteredExpense({
    //   ...enteredExpense,
    //   enteredDate: event.target.value,
    // });

     // correct way to update object using previous state
    // setEnteredExpense((prevState) => {
    //     return { ...enteredExpense, enteredDate: event.target.value };
    //   });

  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpense = {title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate)};
    props.onSaveExpenseData(enteredExpense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value = {enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
