import React from 'react'
import ListElement from './ListElement'
import User from './User'

export default ({ tours }) => (
  <div className="container">
    <div className="space"></div>
    <h1>Browse All Tours</h1>
    <hr></hr>
    <div className="space"></div>

    <div className="row add-padding">
      { 
        tours != [] ? tours.map( listElement =>
        <ListElement listElement={listElement} key={listElement.id}/> 
        ) : <h1>LOADING</h1> 
      }
    </div>  
  </div>
);