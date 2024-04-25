import React, { Component } from 'react'

export default class DKV_EventForm1 extends Component {
    eventHandleClick1=()=>{
        alert("event handle 1");
    }
    eventHandleClick2=()=>{
        alert("event handle 2");
    }
  render() {
    return (
      <div className='alert alert-danger'><h2>Event handle</h2>
      <button onClick={this.eventHandleClick1()}>Click1</button>
      <button onClick={this.eventHandleClick2}>Click2</button>
      </div>
    )
  }
}
