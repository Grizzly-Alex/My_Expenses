import './CostForm.css';

function CostForm(){
    return <form>
        <div className='new-cost__controls'>
            <div className='new-cost__control label'>
                <label>Название</label>  
                <input type='text'/>          
            </div>
            <div className='new-cost__control label'>
                <label>Сумма</label>  
                <input type='number' min='0.01' step='0.01'/>         
            </div>
            <div className='new-cost__control label'>
                <label>Дата</label>  
                <input type='date' min='2024-10-08'/>         
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить Расход</button>       
            </div>
        </div>
    </form>

}

export default CostForm;