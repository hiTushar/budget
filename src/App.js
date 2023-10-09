import { useContext, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCloseCircle } from 'react-icons/ai'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import AddExpenseForm from './components/AddExpenseForm';
import { AppContext } from './context/AppContext';

function App() {
  const [editMode, setEditMode] = useState(false);
  const { budget, dispatch } = useContext(AppContext);

  let newBudget = useRef(budget);

  const editBudget = () => {
    setEditMode(true);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(!newBudget.current.value) {
      return;
    }
    dispatch({ type: 'UPDATE_BUDGET', payload: parseInt(newBudget.current.value) })
    setEditMode(false);
  }

  return (
    
      <>
        <div className='container'>
          <h1 className='mt-3'>Budget Planner</h1>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budget editBudget={editBudget} />
            </div>
            <div className='col-sm'>
              <Remaining />
            </div>
            <div className='col-sm'>
              <ExpenseTotal />
            </div>
          </div>
          <h3 className='mt-3'>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>
          <h3 className='mt-3'>Add Expense</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpenseForm />
            </div>
          </div>
        </div>
        {
          // editMode ? (
            <div>
              <div className="modal fade " id="edit" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Update Budget</h5>
                      <AiFillCloseCircle data-bs-dismiss="modal" size='1.5rem' role='button'></AiFillCloseCircle>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={onSubmit} className='needs-validation' noValidate>
                        <label htmlFor='name' className='mb-2'>Enter new Budget Amount</label>
                        <input 
                          required={true}
                          type='text'
                          className="form-control mb-3"
                          id='name'
                          ref={newBudget}
                          autoComplete='off'                     
                        ></input>
                        <div className="invalid-feedback">
                          Please enter a valid budget.
                        </div>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          // ) : null
        }
      </>
  );
}

export default App;
