import React from 'react'
import ListElement from './ListElement'
import Search from './Search'
import { handleItemChange } from '../helpers/changeHandlers'
import { setSearchItem } from '../actions/searchActions'
    //   <div className="row add-padding">
    //     { props.tours.map((listElement) =>
    //       <ListElement listElement={listElement} key={listElement.id}/>
    //     )} 
    //   </div>


export default props =>  (
  <div>
    <div className="jumbotron vertical-center">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
        
        
      </div>
    </div>

    <div className="container">
      <Search 
          className="row"
          dispatch={props.dispatch}
          searchItem='tour'
          search={props.search}
          name='title'
          placeholder='Search by tour title...'
          onChange={handleItemChange.bind(null, setSearchItem)}
        />
     </div>
     <div className="space"></div>
  </div>
);
