import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({items}) => {
    if(items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
    }
    
    const expenseElem = items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      });
    
    
    return (<ul className="expenses-list">
        {expenseElem}
    </ul>);
}

export default ExpensesList;