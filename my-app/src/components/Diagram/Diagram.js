import './Diagram.css';
import DiagramBar from './DiagramBar.js';


function Diagram(props){
    const dataSetsValues = props.dataSets.map(item => item.value);
    const maxMonthCost = Math.max(...dataSetsValues);

    return(
        <div className="diagram">
            {props.dataSets.map((dataSet, index)=>
                <DiagramBar 
                key={index}
                value={dataSet.value}
                maxValue={maxMonthCost}
                label={dataSet.label}/>
            )}
        </div>
    )
};

export default Diagram;