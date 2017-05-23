import React from 'react';
import FormComponent from './formComponent';
import ListElement from './ListElement';
import SubmitButton from './SubmitButton';
import { search } from '../actions/searchActions';

export default props => {
  var handleSubmit = e => {
    e.preventDefault();

    props.dispatch(search({ title: props.search.title }));
  };

  // var style = {
  //   "padding-top": "3em"
  // };
      // <h3 className="text-center">Search for a {props.searchItem} here</h3>

        // <h3>Search for a {props.searchItem} here</h3>
  return (
    <div className='row'>

      <div className="space"></div>
        <form onSubmit={handleSubmit}>
          <FormComponent 
            name={props.name}
            value={props.search.title}
            onChange={props.onChange}
            noLabel={true}
            placeholder={props.placeholder}
          />
        </form>
    
      <div className="add-padding">
      <div className="row add-padding">
        { 
          props.search.searchResults.length > 0 ? 
            props.search.searchResults.map(item => (
              <ListElement listElement={item} key={item.id}/>
            )) : 
            ''
        }
      </div>
      </div>
    </div>
  );
};
