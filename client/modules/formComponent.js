import React from 'react';

export default props => (
  <div className="form-group">
    <div className="space"></div>
    {
      props.noLabel ? '' : 
        <label className="col-sm-2 control-label">
          { (props.name.charAt(0).toUpperCase() + props.name.slice(1)) }:
        </label>
    }
    <div className={ props.noLabel ? "col-sm-offset-2 col-sm-8" : "col-sm-8"}>
      <input 
        type={ props.name === "password" ? "password" : "text"} 
        name={props.name}
        placeholder={ props.placeholder ? props.placeholder : '' }
        className="form-control"
        value={props.value}
        onChange={props.onChange.bind(null, props.name)}
      />
    </div>
  </div>
);
