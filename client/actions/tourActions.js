import axios from 'axios';
import client from '../esClient';

export function createTour(tour) {
  return dispatch => (
    axios.post('/api/tours', tour)
      .then(resp => {
        if (resp.status === 201) {
          dispatch(clearInCreation());
          dispatch(setTourListWithData());
        }
      }).catch(err => {
        dispatch(createTourError(err));
      })
  );
}

export function clearInCreation() {
  return {
    type: "CLEAR_IN_CREATION"
  }
}

export function createTourError(err) {
  return {
    type: "CREATE_TOUR_ERROR",
    err,
  }
}

export function setTourList(tours) {
  return {
    type: "SET_TOUR_LIST",
    tours: tours.map(item => item._source)
  };
}

export function setTourListWithData() {
  return (dispatch) => (
    client.search({
			index: 'tours',
			type: 'tour',
			body: {
				query: {
					match_all: {}
				},
				sort: {
					"id": { order: "desc" }
				}
			}
		}).then(resp => dispatch(setTourList(resp.hits.hits)))
  )
}

export function setTourItem(item, value) {
  var toReturn = {
    type: 'SET_TOUR_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
