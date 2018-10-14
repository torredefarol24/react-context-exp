import React from 'react'
import { FamilyConsumer } from "../context/FamilyContext";
export default class Child extends React.Component{

  state = {
    flowerBouquets : 5
  }

  render(){
    return(
      <div className='row mt48'>
        <h3>Child <small>Consumer</small></h3>
        <FamilyConsumer>
          { passedValue => 
            <div className='row'>
              <p> Gets Lastname from GrandMom {passedValue.lastName}</p>
              <p> If Mother doesnt give her HeirLoom Rings</p>
            </div>
          }
        </FamilyConsumer>
        
      </div>
    )
  }
}