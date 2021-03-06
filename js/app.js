/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;
var vm;   // declares a global map variable
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  var locations;

  var mapOptions = {
    disableDefaultUI: true,
    gestureHandling: 'greedy',
  };
  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  vm = new ViewModel();
  function locationFinder() {
    // initializes an empty array
    var locations = [];
    // adds the single location property from bio to the locations array
    locations.push(vm.city);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    vm.schools().forEach(function(school){
      locations.push(school.location);
    });
    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    vm.jobs().forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }
  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + marker.title + '';
      infoWindow.open(map, marker);
      infoWindow.setContent('<div class="infoWindow">' +'<h6>' + marker.title + '</h6>'+
                      '<br>' +
                      '<img class="bgimg" src="' + streetviewUrl + '">');
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }
  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results); // <- here
      createMapMarker(results[0]);
    }
  }
  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };
      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();
  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

} //end initialize map
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

//code that changes the name format
function intName(name) {
  var newName = '';


  console.log(vm.name());
  name = vm.name().trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  console.log(name[0]);
  name[1] = name[1].toUpperCase();
  console.log(name[1]);

  newName = name[0] + " " + name[1];
  return newName;
  // console.log(name[0] + " " + name[1]);
  console.log(newName);
}
