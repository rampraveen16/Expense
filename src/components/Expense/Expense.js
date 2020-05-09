import React from 'react'
import deleteImag from '../../delete.svg'
import {thousands_separators} from '../DisplayBoard/Value'
import styled from 'styled-components';
const expense = (props) => {
    const StyleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
    & p {
      margin: 5px;
    }
    & img {
      transition:0.35s all;
      &:hover {
        transform:scale(1.3)
      }
    }
    `
    let color = (props.data.status ==='INCOME') ? 'green' : 'red'
    
    return(
     
    (Object.keys(props.data).length === 0)? '': 
        <div>
         <p style={{fontSize:'10px',margin:0,color:'#6f6969'}}>{props.data.date}</p>
         <StyleDiv>
            <p style={{fontSize:'15px'}} className={color}>{thousands_separators(props.data.amount)}</p>
            <p style={{fontSize:'14px'}}>{props.data.description}</p>
            <img style={{width: '30px', cursor:'pointer'}} onClick ={()=>{props.remove(props.data.id)}} src={deleteImag} alt="delete"/>
         </StyleDiv>
        </div>
    )
}

export default expense