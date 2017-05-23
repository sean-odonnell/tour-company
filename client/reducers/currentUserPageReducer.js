var userDefaults = {
  username: '',
  lookedForCurrentUserPage: false,
  isGuide: false,
  image: '',
  bio: '',
  tours: []
};

export function currentUserPageReducer(state = userDefaults, action) {
  switch(action.type) {
    case "SET_CURRENT_USER_PAGE":
      return {
        ...action.currentUserPage,
        lookedForCurrentUserPage: true,
        image: '',
        bio: 'This is my bio. Bios are great. Tours are great too.',
        tours: [
                {
                    "id": 1,
                    "image": 'https://waterworldswim.com/wp-content/uploads/2014/08/maggietidmore11.jpg',
                    "title": 'Swimming under the Golden Gate Bridge',
                    'location': 'Golden Gate Bridge',
                    "rating": 4.1,
                    'date': '2017-01-20'
                  },
                  {
                    "id": 2,
                    "image": "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000001168352_small.jpg",
                    "title": "Jump in to Golden Gate Bridge",
                    'location': 'Golden Gate Bridge',
                    "rating": 4.2,
                    'date': '2017-02-20'
                  },
                  
                  {
                    "title": 'Maverick Biker',
                    'location': '3301 Lyon St, San Francisco, CA 94123',
                    "rating": 4.9,
                    'date': '2017-01-27',
                    'review': {
                      content: 'Had a great time. Mark was a great guide!',
                      userRating: 5
                    }
                  },
                  {
                    "title": 'Swimming under the Golden Gate Bridge',
                    'location': 'Golden Gate Bridge, San Francisco, CA 94129',
                    "rating": 4.1,
                    'date': '2017-01-20'
                  },
                  
                  {
                    "title": "Jump in to Golden Gate Bridge",
                    'location': 'Golden Gate Bridge',
                    "rating": 4.2,
                    'date': '2017-02-20'
                  }]
      }
    default:
      return state;
  }
}
