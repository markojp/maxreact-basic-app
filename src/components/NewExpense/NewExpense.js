import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (expenseData) => {
        const expense = {...expenseData, id: Math.random().toString()};
        props.onAddExpense(expense);
    };

    const onStopEditingHandler = () => {
        setIsEditing(false);
    }

    const onStartEditingHandler = () => {
        setIsEditing(true);
    }

    let conditionalElem = <button type='button' onClick={onStartEditingHandler}>Add Expense</button>

    if(isEditing){
        conditionalElem = <ExpenseForm onCancel={onStopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
    }

    return (
        <div className='new-expense'>
            {conditionalElem}
        </div>
    );
}

export default NewExpense;