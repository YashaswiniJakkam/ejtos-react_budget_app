import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const AllocationForm = (props) => {
    const {dispatch,remaining,currency} =useContext(AppContext);
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    const [action,setAction] = useState('');
    const submitEvent=() =>{
        if(cost>remaining){
            alert("The value cannot excced remaining funds "+remaining);
            setCost("");
                return;
        }

        const expense={
                name:name,
                cost : parseInt(cost),
        };
        if(action === "Reduce"){
            dispatch({
                type:'RED_EXPENSE',
                payloaad: expense,
            });
        }else{
            dispatch({
                type:'ADD_EXPENSE',
                payload:expense,
            });
        }
    };
  return (
    <div>
      <div className='row'>
        <div className='input-group mb-3' style={{marginLeft:'2rem'}}>
            <div className='input-group-prepend'>
                <label className='input-group-text' htmlFor='inputGroupSelector01'>Department</label>
            </div>
            <select className='custom-select' id='inputGroupSelecet01' onChange={(Event)=>setName(Event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Marketing" name="marketing">Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
            </select>

            <div className='input-group-prepend' style={{marginLeft:'2rem'}}>
            <label className='input-group-text' htmlFor='onputGroupSelect02'>Allocation</label>
            </div>
            <select className='custom-select' id="inputGroupSelect02" onChange={(Event) => setAction(Event.target.value)}>
                <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
            </select>
            <span className="eco" style={{ marginLeft: '2rem'}}>{currency}</span>
            <input required='required'
                    type = 'number'
                    id='cost'
                    value={cost}
                    style = {{marginLeft : '1rem', size:10}}
                    onChange = {(Event)=>setCost(Event.target.value)}></input>
            
            <button className='btn btn-primary' onClick={submitEvent} style={{ marginLeft: '1rem'}}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;

