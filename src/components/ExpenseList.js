import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

export default function ExpenseList() {
    const { expenses } = useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>    
    )
}
