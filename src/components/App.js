import React from 'react';
import piano from '../piano'
import { Transport } from 'tone'
import duo from '../composers/phrase-form-trio'
import trio from '../composers/simple-trio'
import quartet from '../composers/simple-quartet'

import * as Tone from 'tone';


class App extends React.Component {
  state = {
    selection: 2
  }
  playNote=()=>{
    console.log('selection',this.state.selection)
    if (this.state.selection === 0) {
      duo()
    }
    if (this.state.selection === 1) {
      trio()
    }
    if (this.state.selection === 2) {
      quartet()
    }
  }
 
  toggleTransport=()=>{
    Tone.start()
    Transport.toggle()
  }
  triggerNote=()=>{
    piano.noteon(60)
  }
  setSelection=(e)=>{
    console.log('button',e.target.value)
    this.setState({selection: Number(e.target.value)})
  }

   
  componentDidMount() {
    Transport.scheduleRepeat((time)=>{
      this.playNote()
    }, "8n")
  }
  render(){
    return (
      <main className='App'>
        <button onClick={this.toggleTransport}>
          play / pause
        </button>
        <button onClick={this.triggerNote}>
          sound test
        </button>
  
        <button value={0} onClick={this.setSelection}>
          robot one
        </button>
        
        <button value={1} onClick={this.setSelection}>
          robot two
        </button>
  
        
        <button value={2} onClick={this.setSelection}>
          robot three
        </button>
  
        <a href="/">new composition</a>
  
      </main>
    );
  }

}

export default App;