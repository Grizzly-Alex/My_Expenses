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

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostItem 
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    amount={props.costs[0].amount}/>
                <CostItem 
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    amount={props.costs[1].amount}/>
                <CostItem 
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    amount={props.costs[2].amount}/>
            </Card>
        </div>

    );
}

export default Costs;