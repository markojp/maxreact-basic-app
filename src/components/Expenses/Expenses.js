import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(props.selected.toString());
    const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear)
    };

    const selectedExpenses = props.items.filter(item => item.date.getFullYear().toString()===filteredYear);
    //console.log(selectedExpenses);
    const expenseElem = selectedExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      });
    return <Card className="expenses">
        <ExpensesFilter options={props.options} selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseElem}
    </Card>;
}

export default Expenses;