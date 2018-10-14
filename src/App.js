import React from 'react'
import GrandMother from './components/Grandmother'

class App extends React.Component{
  render(){
    return(
      <div className='row'>
        <div className='columns small-12 large-6 ml32'>
          <h5>Open ./components/Mother.js and uncomment Lines 13 & 18 to see the effect</h5>
          <GrandMother></GrandMother>
        </div>
      </div>
      
    )
  }
}

export default App