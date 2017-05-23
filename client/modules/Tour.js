import React from 'react'
import NavLink from './NavLink'
import Map from './map'

export default ({ tours, params }) => {
  if (tours.length === 0) {
    return (<div />);
  }

  const id = params.TourID;
  const thisTour = tours.find(elem => elem.id == id);
  const divStyle = {
    backgroundImage: 'url(' + thisTour.image + ')'
  }

  var handleBooking = () => {
    // var printContents = document.getElementByClassName("printableArea").innerHTML;
    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
    console.log('this function will send email to guide');
  }

  thisTour.tourGuide = 'Mark';
  // thisTour.rating = thisTour.rating.toFixed(1);


  return (
    // Button doesn't do anything aside from take you to login, make sure to refactor
    <div className="container add-padding">

        <h1 className="printableArea">{thisTour.title}</h1>
        <div className="space"></div>
        <div className="space"></div>

    <div className="row">

      <div className="col-12 col-md-8">
        <div className="center-cropped-tour" style={divStyle}> </div>
      </div>
      <div className="col-12 col-md-4 printableArea" >
        <table className="table">
          <tbody>
              <tr><td><h5>Tour guide: </h5></td><td><p>{thisTour.tourGuide}</p></td></tr>
              <tr><td><h5>Price: </h5></td><td><p>{thisTour.price}</p></td></tr>
              <tr><td><h5>Time: </h5></td><td><p>{thisTour.duration}</p></td></tr>
              <tr><td><h5>Rating: </h5></td><td><p>{thisTour.rating}</p></td></tr>
              <tr><td><h5>Location: </h5></td><td><p>{thisTour.location}</p></td></tr>
          </tbody>
        
        </table>


          <button type="button" className="btn btn-primary" onClick={handleBooking()} >
            Book this experience
          </button>


      </div>
    </div>

    <div className="row add-padding printableArea">
      <div className="col-md-8">
        <h5>About this tour</h5>
        <p>{thisTour.description}</p>
        <div className="space"></div>
        <hr></hr>
      </div>

      <div className="col-md-8">
        <h5>About the guide</h5>
        <p>{thisTour.tourGuide}</p>
      </div>

      <div className="col-md-8">
        <h5>About the meet place</h5>
        <Map location={thisTour.location}/>
      </div>
    </div>
    </div>
  );
}
