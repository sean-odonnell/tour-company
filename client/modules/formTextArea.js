import React from 'react';

export default props => (
  <div className="form-group">
    <div className="space"></div>
    <label className="col-sm-2 control-label">{ (props.name.charAt(0).toUpperCase() + props.name.slice(1)) }:</label>
    <div className="col-sm-8">
      <textarea cols={props.cols} rows={props.rows} name={props.name} className="form-control" value={props.value} onChange={props.onChange.bind(null, props.name)} />
    </div>
  </div>
);
