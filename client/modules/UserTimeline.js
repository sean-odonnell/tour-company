import React from 'react';
import TourPreview from './TourPreview';

export default props => {
  if (props.tours.length === 0) {
    return (
      <div >
        <p>None</p>
      </div>
    );
  } 
  console.log('length wasnt 0 ', props.tours, props.tours.length);
  var relevantTours;
  if (props.whichTours === 'upcoming') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) >= new Date()
    )
  } else if (props.whichTours === 'past') {
    relevantTours = props.tours.filter(tour =>
      new Date(tour.date) < new Date()
    )
  } else if (props.whichTours === 'all') {
    relevantTours = props.tours
  }

  return (
    <div className="row">
      
      {relevantTours.map((tour, key) =>
        <TourPreview key={key} whichTours={props.whichTours} auth={props.auth} tour={tour}/>
      )}
    </div>
  );
};
