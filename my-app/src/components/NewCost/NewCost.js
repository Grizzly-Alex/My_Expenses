import './NewCost.css';
import CostForm from './CostForm.js';
import React, {useState} from 'react'

function NewCost(props){
    const [isFormVisible, setFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) =>
    {
        const costData = {
            id: Math.random().toString(),
            ...inputCostData,
        };

        props.onAddCost(costData);
        setFormVisible(false);
    };

    const inputCostDataHandler = () => 
        setFormVisible(true);

    const cancelCostHandler = () => 
        setFormVisible(false);
    

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm onSaveCostData = {saveCostDataHandler} onCancelForm = {cancelCostHandler}/>}
    </div>

}

export default NewCost;