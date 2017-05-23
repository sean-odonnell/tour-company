import React from 'react'
import FormComponent from './formComponent'
import FormTextArea from './formTextArea'
import SubmitButton from './SubmitButton'
//submit review stuff here
import { handleItemChange } from '../helpers/changeHandlers'

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, /* replace with item change */);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(createTour(this.props.reviewInfo));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <h3 className='text-center'>Write a review</h3>

        <FormTextArea 
          rows={8} 
          cols={80} 
          name='Body' 
          value={this.props.reviewInfo.body} 
          onChange={this.handleItemChange}
        />
      </form>
    );
  }
}
