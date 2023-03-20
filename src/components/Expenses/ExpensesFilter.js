import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const optionElements = props.options.map(year=> {
        return <option key={year} value={year}>{year}</option>;
    });

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year:</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    {optionElements}
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;