import React from 'react'
import NavLink from './NavLink'
import Tour from './Tour'

export default ({ tours, params }) => {
  if (tours.length === 0) {
    return (<div />);
  }

  const id = params.TourID;
  const thisTour = tours.find(elem => elem.id == id);
  const divStyle = {
    backgroundImage: 'url(' + thisTour.image + ')'
  }

  return (
    // Button doesn't do anything aside from take you to login, make sure to refactor
    <div className="container add-padding">

        <h1>{thisTour.title}</h1>
        <div className="space"></div>
        <div className="space"></div>

    <div className="row">

      <div className="col-12 col-md-8">
        <div className="center-cropped-tour" style={divStyle}> </div>
      </div>
      <div className="col-12 col-md-4">
        <table className="table">
          <tbody>
              <tr><td><h5>Tour guide: </h5></td><td><p>{thisTour.tourGuide}</p></td></tr>
              <tr><td><h5>Price: </h5></td><td><p>{thisTour.price}</p></td></tr>
              <tr><td><h5>Time: </h5></td><td><p>{thisTour.time}</p></td></tr>
              <tr><td><h5>Location: </h5></td><td><p>{thisTour.location}</p></td></tr>
          </tbody>
        
        </table>

        <NavLink to="/Login">
          <button type="button" className="btn btn-primary">
            Book this experience
          </button>
        </NavLink>
      </div>
    </div>

    <div className="row add-padding">
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