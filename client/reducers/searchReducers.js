var searchDefaults = {
  title: '',
  searchResults: []
};

export function searchReducer(state = searchDefaults, action) {
  switch(action.type) {
    case "CLEAR_SEARCH_ITEM":
      return {
        ...searchDefaults,
        searchResults: state.searchResults
      };
    case "SET_SEARCH_TITLE":
      return {
        ...state,
        title: action.title
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.results
      };
    default:
      return state;
  }
}
