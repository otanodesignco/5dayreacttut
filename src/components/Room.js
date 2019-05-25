import React, { Component } from 'react'
/*
export default class Room extends Component {
    state = { 
        itsLit: true
    };
flipLight = () => this.setState( {itsLit : !this.state.itsLit} );
toggleLight = ($v) => this.setState( {itsLit : $v});
  render() {
      const brightness = this.state.itsLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        This room is {this.state.itsLit ? 'lit' : 'Dark'}
        <br/>
        <button onClick={this.flipLight}>Flip</button>
        <button onClick={this.toggleLight(true)}>On</button>
        <button onClick={this.toggleLight(false)}>Off</button>
    </div>
    )
  }
}
*/
export default class Room extends Component {
    state = { 
        itsLit: true
    };
    toggleLight = (type) => {
        switch(type){
            case 'On':
                if(this.state.itsLit === true){
                    console.log('Already on!');
                }else{
                    this.setState({itsLit : !this.state.itsLit});
                }
            break;
            case 'Off':
                if(this.state.itsLit === false){
                    console.log('Already off!');
                }else{
                    this.setState({itsLit : !this.state.itsLit});
                }
            break;

            default:
            break;
        }
    }

  render() {
      const brightness = this.state.itsLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        This room is {this.state.itsLit ? 'lit' : 'Dark'}
        <br/>
        <button onClick={() => this.toggleLight('On')}>On</button>
        <button onClick={() => this.toggleLight('Off')}>Off</button>
    </div>
    )
  }
}