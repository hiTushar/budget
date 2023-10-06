import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <li key={props.id} className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='text-dark badge badge-primary badge-pill mr-3'>
                    Rs. {props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}
