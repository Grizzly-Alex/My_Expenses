import './CostsFilter.css'

function CostsFilter(props){
    const yearChangeHandler = (event) =>{
        props.onChangeYear(event.target.value);
    };

    return(
        <div className="costs-filter">
            <div className="costs-filter__control">
            <label>Выбор по году</label>
            <select value={props.selectedYear} onChange={yearChangeHandler}>
                    {props.listYears.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>

            </div>
        </div>
    );
};

export default CostsFilter;