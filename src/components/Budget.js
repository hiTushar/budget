import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export default function Budget() {
    const { budget } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span>Budget: Rs. {budget}</span>
        </div>
    )
}
