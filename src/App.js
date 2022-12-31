import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", date: new Date(2022, 0, 11), title: "Insurance", amount: 100 },
    { id: "e2", date: new Date(2022, 1, 12), title: "Rent", amount: 400 },
    { id: "e3", date: new Date(2022, 2, 13), title: "Electricity", amount: 70 },
    { id: "e4", date: new Date(2022, 3, 14), title: "Phone", amount: 50 },
  ];
  const expenseElem = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseElem}
    </div>
  );
}

export default App;
