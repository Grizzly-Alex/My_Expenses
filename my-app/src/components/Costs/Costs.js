import './Costs.css';
import CostList  from './CostList.js';
import Card from '../UI/Card.js';
import CostsFilter from './CostsFilter.js';
import CostsDiagram from './CostsDiagram.js';
import React, { useState } from 'react';

function Costs(props){

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();
    

    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearChangeHandler = (year) =>{
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() == selectedYear);

    const getListYears = (currentYear) => {
        const listYears = props.costs.map(item => item.date.getFullYear());
        listYears.push(currentYear);
        const uniqueYears = [...new Set(listYears)];
        return uniqueYears.sort((a, b) => a - b);
    };

    return (
        <div>
            <Card className='costs'>
                <CostsFilter selectedYear={selectedYear} listYears={getListYears(currentYear)} onChangeYear={yearChangeHandler}/>
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>

    );
}

export default Costs;