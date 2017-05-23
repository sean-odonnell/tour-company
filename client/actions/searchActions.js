import client from '../esClient';

export function search(searchInfo) {
  return dispatch => (
    client.search({
      index: 'tours',
      type: 'tour',
      body: {
        query: {
          match_phrase_prefix: {
            ...searchInfo
          }
        }
      }
    }).then(resp => {
      var hits = resp.hits.hits;

      dispatch(setSearchItem('results', hits.map(item => item._source)));
      dispatch(clearSearchItem());
    }).catch(err => {
      console.log('Search error', err);
    })
  );
}
export function clearSearchItem() {
  return {
    type: "CLEAR_SEARCH_ITEM"
  };
}
export function setSearchItem(item, value) {
  var toReturn = {
    type: 'SET_SEARCH_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
