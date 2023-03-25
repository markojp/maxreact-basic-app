import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import React, { useState, useEffect } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

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

    
    return <Card className="expenses">
        <ExpensesChart expenses={filteredItems} />
        <ExpensesFilter options={options} selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredItems} />
    </Card>;
}

export default Expenses;