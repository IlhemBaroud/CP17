import React from "react";
class Statecomp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            person : {
            fullName : "John Doe",
            bio : "Master",
            imgSrc : "/John-Doe.jpg", 
            profession : "Full stack web developper"
            },
            show : true,
            timeInTheDom : 0
            
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

    componentWillUnmount() {
        this.setState({
            timeInTheDom: 0
        });
        clearInterval(this.timerID);

      }
    
    tick() {
        this.setState({
          timeInTheDom: this.state.timeInTheDom+1
        });
      }

    toggleShowState=()=>{this.setState({show: !this.state.show, timeInTheDom : 0})};
    
    render() {
        
        return(this.state.show?
            <div>
                <p>Hello I'm {this.state.person.fullName} I'm a {this.state.person.bio} {this.state.person.profession}</p>
                <p>Timer : {this.state.timeInTheDom} second(s)</p>
                <img src={this.state.person.imgSrc} alt="Hi! It's me ;)" /><br />
                <button onClick={this.toggleShowState}>Show/Hide</button><br />
                
            </div>
            :
            <div>
                 <button onClick={this.toggleShowState}>Show/Hide</button>
            </div>

            );
        
            
    }

    

}

export default Statecomp