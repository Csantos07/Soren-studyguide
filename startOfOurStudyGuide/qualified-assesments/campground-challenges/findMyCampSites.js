let campgrounds = [

  { number: 1, view: "ocean", partySize: 8, isReserved: false },

  { number: 5, view: "ocean", partySize: 4, isReserved: false },

  { number: 12, view: "ocean", partySize: 4, isReserved: true },

  { number: 18, view: "forest", partySize: 4, isReserved: false },

  { number: 23, view: "forest", partySize: 4, isReserved: true },

];

/**

Write a function named findMyCampsites*/
function findMyCampsites(campgrounds, view, partySize) {


  for (let i = 0; i < campgrounds.length; i++) {
    let campground = campgrounds[i];

    if (campground.isReserved === false ) {
      console.log(campground.view);
    }

  }

}

findMyCampsites(campgrounds);

// Do not make changes below this line
