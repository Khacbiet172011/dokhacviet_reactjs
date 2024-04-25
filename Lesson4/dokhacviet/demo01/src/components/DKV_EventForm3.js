import React, { Component } from 'react'

export default class DKV_EventForm3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"do khac viet",
            job:"Dev soft"
        }
    }
    handleChangeName = (ev)=>{
        this.setState({
            name:"k22cntt3-Reactjs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job:"cong nghe phan mem"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'><h2>thay doi du lieu state</h2>
      <p>du lieu:{this.state.name}-{this.state.job}</p>
      <button onClick={this.handleChangeName}>thay doi name</button>
      <button onClick={this.handleChangeJob}>thay doi job</button>
      </div>
    );
  }
}
