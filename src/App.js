
import React from "react";
import "./App.css"
import Statecomp from "./components/statecomp.js"
class App extends React.Component {
  myStyle = {color : "navy", fontWeight : "bold"}
  render() {
    return(
    
      <div className="App"><h1 style={this.myStyle}> Welcome to React State </h1> 
         <Statecomp />
      </div>
    );
  }
}

export default App;
