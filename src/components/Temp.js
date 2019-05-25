import React, { Component } from 'react'

export default class Temp extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            temp : 72
        };
    }
    changeTemp = (type) =>{
        switch(type)
        {
            case 'Up':
                this.setState({temp : this.state.temp + 1});
            break;

            case 'Down':
                this.setState({temp : this.state.temp - 1});
            break;

            default:

            break;
        }
    } 
 render() {
    return (
      <div>
        <span className="temp">{this.state.temp}<sup>&deg;</sup></span>
        <br></br>
        <button className="button btn-up" onClick={() => this.changeTemp('Up')}>+</button>
        <button className="button btn-down" onClick={() => this.changeTemp('Down')}>-</button>
      </div>
    )
  }
}
