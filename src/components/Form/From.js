import React from 'react'
import './From.css'

const form = (props) => {
    let heading = (props.data.length === 0)? 'Please Add Income/Spend Amount':''
    let errorClass = (props.error === true)? 'error':''
    let button = (props.visible === false) ? <h4>{heading}</h4>:

    <React.Fragment>
    <div className="input--wrap"><form onSubmit={props.submit}> 
    <input type="date" name="date" onChange={props.date} required />
    <input type ="text"  className={errorClass} onChange={props.amount} required placeholder="Enter Amount"/>
    <textarea onChange={props.description} placeholder="Description" required></textarea>
    <input type="submit" value="ADD" />
    </form></div>
    </React.Fragment>
    
    return(
         button
    )
}

export default form