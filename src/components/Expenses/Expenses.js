import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const expenseElem = props.items.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      });
    return <Card className="expenses">
        {expenseElem}
    </Card>;
}

export default Expenses;