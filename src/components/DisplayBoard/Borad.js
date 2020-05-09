import React from 'react'
import {thousands_separators, getAmount} from './Value'
const board = (props) => {

    let totalIncome = getAmount(props,'INCOME')
    let totalSpend = getAmount(props,'SPEND')
    let totalAmount = (isNaN(totalIncome - totalSpend))? null : totalIncome - totalSpend

    return(
        <React.Fragment>
        <h4>Balance</h4>
        <h2>{thousands_separators(totalAmount)} CKZ</h2>
        <span style={{color:'#21d21f',marginRight:'20px'}}>Income: {thousands_separators(totalIncome)} KC</span>
        <span style={{color:'red'}}>Spend: {thousands_separators(totalSpend)} KC</span>
        </React.Fragment>

    )
}

export default board