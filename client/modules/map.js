import React from 'react'

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location,
		}
	}

	componentDidMount(props) {
		var geocoder = new google.maps.Geocoder();
		console.log('location, ', this.state.location);
    geocoder.geocode( { 'address': this.state.location}, function(results, status) {
      if (status == 'OK') {
      	var center = results[0].geometry.location;
      	console.log('center', center);
      	var map = new google.maps.Map(document.getElementById('map'), {
      		zoom: 15,
      		center: center
      	});
        var marker = new google.maps.Marker({
            map: map,
            position: center
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    })
	}
			    

	render() {
	console.log('map props', this.props);
		return (
			<div>
					<p>{this.state.location}</p>
	    		<div id="map"></div>
	    	</div>
    	)
	}
}