/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import './App.css';
import Board from './components/DisplayBoard/Borad'
import Expense from './components/Expense/Expense'
import Form   from './components/Form/From'
import Button from './components/Button/Button'

class App extends Component {

  state = {
    newAmount:{
      id:0,
      date:null,
      amount:null,
      description:'',
      status:''
    },
    amount:[],
    status:'',
    error:false,
    visible: false    
  }
  validate = () => {

    if(!Number(this.state.newAmount.amount) || this.state.newAmount.amount < 0 || this.state.newAmount.date == null || this.state.newAmount.description ==='' ){
      alert('Please Enter Valied Number')
      this.setState({
        error: true
      })
      return false
    }
    this.setState({
      error: false
    })
    return true
  }
  submit = (event) => {
    event.preventDefault();
    let valid = this.validate()
    if(valid) {
    this.setState({
      amount: [...this.state.amount, this.state.newAmount]
    })
    event.target.reset();
    this.setState({
      visible: !this.state.visible
    })
  }
  }

  amountHandeler = (event) => {
   this.setState({
    newAmount: {  id:this.state.newAmount.id + 1, date:this.state.newAmount.date, amount:event.target.value, 
                  description: this.state.newAmount.description, status:this.state.newAmount.status }
   })
  }
  dateHandler = (event) => {
    this.setState({
      newAmount: {  id:this.state.newAmount.id + 1,date:this.state.newAmount.date, amount:this.state.newAmount.amount, 
                    description: this.state.newAmount.description, status:this.state.newAmount.status }
     })
  }
  
  descriptionHandeler = (event) => {
    this.setState({
      newAmount: {  id:this.state.newAmount.id + 1,date:this.state.newAmount.date, amount: this.state.newAmount.amount,
                    description:event.target.value, status:this.state.newAmount.status  }
     })
  }
  statusHandler = (ele) => {
    this.setState({
      newAmount: {  id:this.state.newAmount.id + 1, date:this.state.newAmount.date, amount: this.state.newAmount.amount, 
                    description:this.state.newAmount.description, status:ele  }
     })
     this.setState({
      visible: !this.state.visible
    })
  }
  dateHandler = (event) => {
    this.setState({
      newAmount: {  id:this.state.newAmount.id + 1, date:event.target.value, amount: this.state.newAmount.amount, 
                    description:this.state.newAmount.description, status:this.state.newAmount.status  }
     })
  }
  deleteHandler =(ele) => {
   let res = this.state.amount.filter((e)=>{
     if(e.id !== ele) {
       return ele
     }
   });
   this.setState({
     amount: res
   })
  }
  render(){

    return(
      <div className="container">
        <section className="board--block"> 
          <Board data={this.state}/>
        </section>
        <section>
          {this.state.amount.map((ele,index)=>{
            return <Expense key= {index} data={ele} status={this.state.status} remove={this.deleteHandler}/>
          })}
          
        </section>
        <section>
           <Form data = {this.state.amount} error = {this.state.error}date = {this.dateHandler}submit={this.submit} 
           amount={this.amountHandeler} description={this.descriptionHandeler} visible = {this.state.visible}/>
        </section>
        <section>
           <Button  status = { this.statusHandler}/>
        </section>
      </div>
    )
  }
}
export default App;
