import React, { Component } from 'react'
import VDK_EventForm1 from './components/VDK_EventForm1';
import VDK_EventForm2 from './components/VDK_EventForm2';
import VDK_EventForm3 from './components/VDK_EventForm3';
import VDK_EventForm4 from './components/VDK_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo </h1>
        <VDK_EventForm1 />
        <VDK_EventForm2 />
        <VDK_EventForm3 />
        <VDK_EventForm4 name="vu duc khoa" />
      </div>
    );
  }
}
