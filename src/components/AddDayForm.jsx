import React, { Component } from 'react';

const AddDayForm = ({resort, date, powder, backcountry}) => {
     const submit = (event) => {
            event.preventDefault();
            console.log('resort', _resort.value);
            console.log('date', _date.value);
            console.log('powder', _powder.checked);
            console.log('backcountry', _backcountry.checked);

            
    }
    let _resort, _date, _powder, _backcountry;
    return (
         <form onSubmit={submit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input id="resort" type="text" required defaultValue={resort} ref={input => _resort = input}/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date} ref={input => _date = input}/>

                <div>
                    
                    <input id="powder" type="checkbox" defaultChecked={powder} ref={input => _powder = input}/>
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div>
                    
                    <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input => _backcountry = input}/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>
                <button>Add Day</button>
            </form>
    )
}


AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

export default AddDayForm;