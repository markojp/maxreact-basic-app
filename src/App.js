import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: "e1", date: new Date(2022, 0, 11), title: "Insurance", amount: 100 },
    { id: "e2", date: new Date(2021, 1, 12), title: "Rent", amount: 400 },
    { id: "e3", date: new Date(2020, 2, 13), title: "Electricity", amount: 70 },
    { id: "e4", date: new Date(2019, 3, 14), title: "Phone", amount: 50 },
  ];
  const years = [2019, 2020, 2021, 2022, 2023];
  const selectedYear = 2019;

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler} />
      <Expenses items={expenses} options={years} selected={selectedYear}/>
    </div>
  );
}

export default App;
