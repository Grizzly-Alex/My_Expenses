import './Costs.css';
import CostList  from './CostList.js';
import Card from '../UI/Card.js';
import CostsFilter from './CostsFilter.js';
import React, { useState } from 'react';

function Costs(props){
    const [selectedYear, setSelectedYear] = useState();

    const yearChangeHandler = (year) =>{
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() == selectedYear);


    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>

    );
}

export default Costs;