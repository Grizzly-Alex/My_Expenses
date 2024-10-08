import './CostItem.css';
import CostDate  from './CostDate.js';
import Card from '../UI/Card.js';
import React, { useState } from 'react';

function CostItem(props) {
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('new text'); // description = 'new text'; & CostItem
    };

    return (
    <Card className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div> 

        <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
    );
};

export default CostItem;