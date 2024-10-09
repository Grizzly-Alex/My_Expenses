
function CostsFilter(props){
    const yearChangeHandler = (event) =>{
        props.onChangeYear(event.target.value);
    };

    return(
        <div>
            <div>
                <label>Выбор по году</label>
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;