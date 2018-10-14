import React from 'react'
import Child from './Child'
import {FamilyProvider} from '../context/FamilyContext'
import GrandChild from './GrandChild';

export default class Mother extends React.Component{
  state = {
    heirloomRings : 3
  }
  render(){
    return(
      <div className='container mt48'>
        {/* <FamilyProvider value={this.state}> */}
          <h2>Mother <small>Provider, but messed up</small></h2>
          <p>Mother Has HeirLoom <strong>{this.state.heirloomRings} Rings</strong></p>
          <Child></Child>
          <GrandChild></GrandChild>
        {/* </FamilyProvider> */}
      </div>
      
    )
  }
}