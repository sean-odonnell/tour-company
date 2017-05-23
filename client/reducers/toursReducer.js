export function toursReducer(state = [], action) {
  switch(action.type) {
    case "SET_TOUR_LIST":
      return action.tours;
    default:
      return state;
  }
}

var inCreationDefaults = {
  title: '',
  id_Guide: 1,
  image: '',
  price: '',
  location: '',
  duration: '',
  description: ''
};

export function createTourReducer(state = inCreationDefaults, action) {
  switch(action.type) {
    case "CLEAR_IN_CREATION":
      return {
        ...inCreationDefaults
      };
    // case "CREATE_TOUR_ERROR":
    //   return {
    //     ...state,
    //     error: action.err
    //   };
    case "SET_TOUR_TITLE":
      return {
        ...state,
        title: action.title
      };
    case "SET_TOUR_IMAGE":
      return {
        ...state,
        image: action.image
      };
    case "SET_TOUR_GUIDE":
      return {
        ...state,
        id_Guide: action.id_Guide
      };
    case "SET_TOUR_PRICE":
      return {
        ...state,
        price: action.price
      };
    case "SET_TOUR_DURATION":
      return {
        ...state,
        duration: action.duration
      };
    case "SET_TOUR_LOCATION":
      return {
        ...state,
        location: action.location
      };
    case "SET_TOUR_DESCRIPTION":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
