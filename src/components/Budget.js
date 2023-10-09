import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { TiEdit } from 'react-icons/ti';

export default function Budget(props) {
    const { editBudget } = props;
    const { budget } = useContext(AppContext);

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            <span>Budget: Rs. {budget}</span>
            <div data-bs-toggle="modal"  data-bs-target="#edit">
                <TiEdit onClick={editBudget} role='button'></TiEdit>
            </div>
        </div>
    )
}
