import React from 'react'
import {thousands_separators} from './Value'
const board = (props) => {
    // eslint-disable-next-line array-callback-return
    let incomeAmount = props.data.amount.filter((ele) => {
        if(ele.status==='INCOME'){
            return ele;
        }
    
    })
    let getIncome = incomeAmount.map((ele => ele.amount));
    let totalIncome =0;
    if(getIncome.length !==0){
     totalIncome =getIncome.reduce((a,b)=>{
         return parseInt(a) + parseInt(b)
    })
    }

    // eslint-disable-next-line array-callback-return
    let spendAmount = props.data.amount.filter((ele) => {
        if(ele.status==='SPEND'){
            return ele;
        }
    
    })

    let getSpend = spendAmount.map((ele => ele.amount));
    let totalSpend =0;
    if(getSpend.length !==0){
        totalSpend =getSpend.reduce((a,b)=>{
         return parseInt(a) + parseInt(b)
    })
    }
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