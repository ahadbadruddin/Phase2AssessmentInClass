import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Sum from './components/Sum.js'

import './App.css';

export default class App extends React.Component {
  state = {
    numbers:[],
    sum: null

  }

  addNumber = (num) =>{ 
    let newNumbers = this.state.numbers
    newNumbers.push(num)
    this.setState({
      numbers:newNumbers
    })
  
  }
  sumNumbers= (element) => {
    let newSum =0
    for(let i=0;i<this.state.numbers.length;i++){
      newSum +=Number(this.state.numbers[i])
    }
    this.setState({
      sum: newSum
    }) 

  }
  deleteNum= (index) => {
    let newNumbers = this.state.numbers
    newNumbers.splice(index, 1)
    this.setState({
      numbers:newNumbers
    })

  }

  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Problem 3</h1>
        <Navbar {...this.props} />
        <Route exact path = "/"
        render={(props) => <Home{...props}/>}/>
        <Route exact path = "/sum"
        render={(props) => <Sum{...props} addNumber= {this.addNumber} sumNumbers = {this.sumNumbers} numbers = {this.state.numbers} sum = {this.state.sum} deleteNum= {this.deleteNum}/>}/>   

      </div>
    </BrowserRouter>
  );
  }

}

