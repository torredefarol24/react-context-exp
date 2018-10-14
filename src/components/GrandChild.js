import React from 'react'
import {FamilyConsumer} from '../context/FamilyContext'

export default class GrandChild extends React.Component{
  render(){
    return(
      <div className='row'>
        <h4>GrandChild <small>Consumer</small></h4>
        <FamilyConsumer>
          {
            passedValues => (
              <div className='container'>
                <p>GrandChild gets HeirLoom Rings passed from Mother {passedValues.heirloomRings}</p>
                <p>If Mother INTERFERES and provides Rings, </p>
                <p>Preventing GrandMom from sending LastName to Child </p>
              </div>
            )
          }
        </FamilyConsumer>
      </div>
      
    )  
  }
}