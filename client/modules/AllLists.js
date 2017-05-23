import React from 'react'
import ListElement from './ListElement'
import User from './User'

// var tours = [
//   {
//     "id": 1,
//     "image": "https://s-media-cache-ak0.pinimg.com/originals/58/3a/dd/583add86c194fa2de17ce38b88644435.jpg",
//     "title": "Find a perfect girl with me in club",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "location": ""
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   },
//   {
//     "id": 2,
//     "image": "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000001168352_small.jpg",
//     "title": "Jump in to Golden Gate Bridge",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   },
//   {
//     "id": 3,
//     "image": "https://waterworldswim.com/wp-content/uploads/2014/08/maggietidmore11.jpg",
//     "title": "Swimming under the Golden Gate Bridge",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   },
//   {
//     "id": 4,
//     "image": "https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg",
//     "title": "Visit really secret place",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   },
//   {
//     "id": 5,
//     "image": "http://hotinjuba.com/wp-content/uploads/2016/09/woman-smoking-weed.jpg",
//     "title": "Smoke weed with me",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   },
//   {
//     "id": 6,
//     "image": "https://a0.muscache.com/im/pictures/89957997-2e3f-40cb-8f0b-dcbd5626bd9c.jpg?aki_policy=large",
//     "title": "Maverick Biker",
//     "price": "500",
//     "rating": 4.9,
//     "numReviews": 120,
//     "description": "Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
//     "duration": "2 Days",
//     "id_Guide": 2
//   }
// ];


export default ({ tours }) => (
  <div className="container">
    <div className="space"></div>
    <h1>Browse All Tours</h1>
    <hr></hr>
    <div className="space"></div>

    <div className="row add-padding">
      { 
        tours != [] ? tours.map( listElement =>
        <ListElement listElement={listElement} key={listElement.id}/> 
        ) : <h1>LOADING</h1> 
      }
    </div>
  </div>
);


