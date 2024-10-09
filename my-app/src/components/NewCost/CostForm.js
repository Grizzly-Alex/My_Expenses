import React, { useState } from 'react';
import './CostForm.css';

function CostForm(){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return <form>
        <div className='new-cost__controls'>
            <div className='new-cost__control label'>
                <label>Название</label>  
                <input type='text' onChange={nameChangeHandler}/>          
            </div>
            <div className='new-cost__control label'>
                <label>Сумма</label>  
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>         
            </div>
            <div className='new-cost__control label'>
                <label>Дата</label>  
                <input type='date' min='2024-10-08' onChange={dateChangeHandler}/>         
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить Расход</button>       
            </div>
        </div>
    </form>

}

export default CostForm;