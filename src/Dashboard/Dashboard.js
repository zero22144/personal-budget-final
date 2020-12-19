import React, { Component } from 'react';
import firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA0rgdSJwERHJftcuQoJcMXxaJ6j2WaGU0",
    authDomain: "personal-budget-final-e5336.firebaseapp.com",
    projectId: "personal-budget-final-e5336",
    storageBucket: "personal-budget-final-e5336.appspot.com",
    messagingSenderId: "71229034329",
    appId: "1:71229034329:web:16e42263b9b0b2bf144648",
    measurementId: "G-VCSYBMSG63"
  };
  
  // Initialize Firebase
  
  var fb = firebase.initializeApp(firebaseConfig);
  

class Dashboard extends Component{

  state = {
    category : " ",
    budget : " ",
    expense: " ",
    month: " "
  }
  handleText=e=>{
    this.setState({
      category : e.target.value

    })
  }
  handleBudget=e=>{
    this.setState({
      budget : e.target.value

    })
  }
  handleExpenses=e=>{
    this.setState({
      expense : e.target.value

    })
  }
  handleMonth=e=>{
    this.setState({
      month : e.target.value

    })
  }

   handleSubmit=e=>{
    fb.database().ref('data').push(this.state.category);
    fb.database().ref('data').push(this.state.budget);
    fb.database().ref('data').push(this.state.expense);
    fb.database().ref('data').push(this.state.month);
    
    var testvar = fb.database().ref('messages').parent;

    document.getElementById("test").innerHTML = "I can't get the chart so here's the proof of database: " + "<br/>" + testvar;
  }

  

  render(){
    return(
      <div className="center" id="main">

        
        <br></br><br></br><br></br>
        
        <h2><label>Month: </label></h2>
        <input type ="text" onChange={this.handleMonth} />
        <br></br><br></br><br></br>

        <h2><label>Category: </label></h2>
        <input type ="text" onChange={this.handleText} />
        <br></br><br></br><br></br>
        
        <h2><label>Budget: </label></h2>
        <input type ="number" onChange={this.handleBudget} />
        <br></br><br></br><br></br>
        
        <h2><label>Expenses: </label></h2>
        <input type ="number" onChange={this.handleExpenses} />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <button onClick={this.handleSubmit}>Show Budget</button>

        <h1 id="test"></h1>

    </div>
    );
  }
}

export default Dashboard;