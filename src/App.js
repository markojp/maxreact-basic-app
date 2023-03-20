import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react"; 

const DUMMY_EXPENSES = [
  { id: "e1", date: new Date(2022, 0, 11), title: "Insurance", amount: 100 },
  { id: "e2", date: new Date(2021, 1, 12), title: "Rent", amount: 400 },
  { id: "e3", date: new Date(2020, 2, 13), title: "Electricity", amount: 70 },
  { id: "e4", date: new Date(2019, 3, 14), title: "Phone", amount: 50 },
  { id: "e5", date: new Date(2019, 1, 12), title: "Clothes", amount: 340 },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const years = [2019, 2020, 2021, 2022, 2023];
  const selectedYear = 2019;
  
  const addExpenseHandler = (expense) => {
    
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler} />
      <Expenses items={expenses} options={years} selected={selectedYear}/>
    </div>
  );
}

export default App;
