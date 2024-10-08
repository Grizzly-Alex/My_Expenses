import './Costs.css';
import CostItem  from './CostItem.js';
import Card from './Card.js'

function Costs(props){

    return (
        <Card className='costs'>
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
                amount={props.costs[1].amount}/>
        </Card>
    );
}

export default Costs;