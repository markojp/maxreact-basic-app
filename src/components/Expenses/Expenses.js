import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import React, { useState, useEffect } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({items, selected, options }) => {
    const [filteredYear, setFilteredYear] = useState(selected.toString());
    const [filteredItems, setFilteredItems] = useState(items);
    const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear)
    };
    
    useEffect(() =>{
      const selectedItems = items.filter(item => item.date.getFullYear().toString()===filteredYear);
      setFilteredItems(selectedItems);
      
    }, [filteredYear, items]);

    const expenseElem = filteredItems.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      });
    
    const conditionalElem = filteredItems.length === 0 ? <p>No Expenses found</p>: expenseElem;

    return <Card className="expenses">
        <ExpensesFilter options={options} selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {conditionalElem}
    </Card>;
}

export default Expenses;