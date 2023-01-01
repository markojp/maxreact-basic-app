import { Card } from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export const Expenses = (props) => {
    const expenseElem = props.items.map((expense) => {
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
        {expenseElem}
    </Card>;
}