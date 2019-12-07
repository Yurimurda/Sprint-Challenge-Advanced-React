import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: '',
    }
  }
  

  componentDidMount() {
    console.log("cDM");
      axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({ players: response.data.message });
      })
      .catch(err => console.log(err));

    }
    componentDidUpdate() {
      console.log("cDU");
    }
  
render() {
  const { players } = this.state
  return (
    <div className="App">
      <header className="App-header">

        <div className="name"> {players} </div>
        
         
        
        
      
      </header>
    </div>
  );
}
}
export default App;
