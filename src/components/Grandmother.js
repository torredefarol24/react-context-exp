import React from 'react'
import {FamilyProvider} from '../context/FamilyContext';
import Mother from './Mother'


export default class GrandMother extends React.Component{
  state = {
    lastName : "Chevy"
  }
  render(){
    return(
      <FamilyProvider value={this.state}>
        <div className='container mt48'>
          <h1>GrandMother <small>Provider</small></h1>
          <p>GrandMom has the LastName <strong>{this.state.lastName}</strong></p>
          <Mother></Mother>
        </div>  
      </FamilyProvider>
    )
  }
}