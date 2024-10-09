import React, { useState } from 'react';
import './CostForm.css';

function CostForm(){
    
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // });

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value,
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         amount: event.target.value,
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         date: event.target.value,
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }; 

        console.log(costData);
    };


    return <form onSubmit={submitHandler}>
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