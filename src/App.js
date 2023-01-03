import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: "e1", date: new Date(2022, 0, 11), title: "Insurance", amount: 100 },
    { id: "e2", date: new Date(2022, 1, 12), title: "Rent", amount: 400 },
    { id: "e3", date: new Date(2022, 2, 13), title: "Electricity", amount: 70 },
    { id: "e4", date: new Date(2022, 3, 14), title: "Phone", amount: 50 },
  ];
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
