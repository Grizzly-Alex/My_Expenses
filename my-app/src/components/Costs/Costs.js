import './Costs.css';
import CostItem  from './CostItem.js';
import Card from '../UI/Card.js';
import CostsFilter from './CostsFilter.js';
import React, { useState } from 'react';

function Costs(props){
    const [selectedYear, setSelectedYear] = useState();

    const yearChangeHandler = (year) =>{
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() == selectedYear);

    let costsContent = <p>В этом году расходов нет</p>;
    
    if(filteredCosts.length > 0){
        costsContent = filteredCosts.map(cost => (<CostItem 
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}/>));
    };

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                {costsContent}
            </Card>
        </div>

    );
}

export default Costs;