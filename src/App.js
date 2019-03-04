import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AddSubcriber from './components/addSubscriber/AddSubscriber';

class App extends Component {
  state = {
    show: false
  }
  render() {
    return (
      <div>

<Link to="/add"> <button>ADD</button></Link>
     
     <br/>
      {!this.state.show?<div>
      Name  Phone <br/></div>:null}   

     
    </div>
    );
  }
}

export default App;
