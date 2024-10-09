import './NewCost.css';
import CostForm from './CostForm.js';

function NewCost(props){
    const saveCostDataHandler = (inputCostData) =>
    {
        const costData = {
            id: Math.random().toString(),
            ...inputCostData,
        };

        props.onAddCost(costData);
    }
    return <div className='new-cost'>
        <CostForm onSaveCostData = {saveCostDataHandler}/>
    </div>

}

export default NewCost;