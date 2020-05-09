import React from 'react'
import styled from 'styled-components';
const button = (props) => {
const ButtonDiv = styled.button `
    text-align: center;
    margin: 10px 20px;
    cursor: pointer;
    display:inline-block;
    font-family: cursive;
    padding: 5px;
    border: 1px solid #000;
    box-shadow: 1px 4px 5px 5px #000;
    transition: 0.35s all;
    &:hover {   
    box-shadow: 1px 4px 5px 2px #667070;
    }

`
    
    return(
        <React.Fragment>

        <div style={{textAlign:'center'}}>
        <ButtonDiv style={{background:'#0ce10c'}}onClick={()=>{props.status('INCOME')}}>Add Income</ButtonDiv>
        <ButtonDiv  style={{background:'red'}} onClick={()=>{props.status('SPEND')}}>Add Spending</ButtonDiv>
        </div>
        </React.Fragment>
    )
}

export default button