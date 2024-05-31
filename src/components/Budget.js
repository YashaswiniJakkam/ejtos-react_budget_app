import React,{useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const {budget,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (Event)=>{
        setNewBudget(Event.target.value);
    }
  return (
    <div className='alert alert-primary'>
        <span>Budget :{currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>  
      
    </div>
  );
};

export default Budget

