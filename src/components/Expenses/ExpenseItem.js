import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const {date, title, amount, id} = props;
  const clickHandler = (event, id) =>{
    console.log("Clicked!!",event, event.target.id,id);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={(e)=>clickHandler(e,id)}>Change title!</button>
    </Card>
  );
}

export default ExpenseItem;
