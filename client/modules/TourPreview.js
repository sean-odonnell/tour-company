import React from 'react';

export default props => {
// if there's a review then render with review
  console.log('this is a tour preview ', props);
  if (props.tour.review) {
    return (
      <div className="card">
        <div className="card-header"><strong>{props.tour.title}</strong></div>
        <div className="card-block">
        <div><strong>Date: </strong>{new Date(props.tour.date).toLocaleDateString()}</div>
        <div><strong>Location: </strong>{props.tour.location}</div>
        <div><strong>Rating: </strong>{props.tour.rating}</div>

        <div><strong>User Review: </strong>{props.tour.review.content}</div>
        <div><strong>User rating: </strong>{props.tour.review.userRating}</div>
      </div>
      </div>

    );
  } 
  // if no review, past, and private view then include button to add
  else if (props.auth === 'private' && props.whichTours === 'past') {
    return (
      <div className="card">
        <div className="card-header"><strong>{props.tour.title}</strong></div>
        <div className="card-block">
        <div><strong>Date: </strong>{new Date(props.tour.date).toLocaleDateString()}</div>
        <div><strong>Location: </strong>{props.tour.location}</div>
        <div><strong>Rating: </strong>{props.tour.rating}</div>
        <button>
        Add Review
        </button>
      </div>
      </div>
    );
  }
  // if upcoming and private view then include button to delete confirmation
  else if (props.auth === 'private' && props.whichTours === 'upcoming') {
    return (
      <div className="card">
        <div className="card-header"><strong>{props.tour.title}</strong></div>
        <div className="card-block">
        <div><strong>Date: </strong>{new Date(props.tour.date).toLocaleDateString()}</div>
        <div><strong>Location: </strong>{props.tour.location}</div>
        <div><strong>Rating: </strong>{props.tour.rating}</div>
        <button>
        Delete
        </button>
      </div>
      </div>
    );
  }
  // if no review and public view then render without review
  return (
    <div className="card">
        <div className="card-header"><strong>{props.tour.title}</strong></div>
      <div className="card-block">
      <div><strong>Date: </strong>{new Date(props.tour.date).toLocaleDateString()}</div>
      <div><strong>Location: </strong>{props.tour.location}</div>
      <div><strong>Rating: </strong>{props.tour.rating}</div>
    </div>
    </div>
  );
};
