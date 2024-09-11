var google;

function init() {
  // Basic options for a simple Google Map
  var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

  var mapOptions = {
    zoom: 7,
    center: myLatlng,
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { hue: "#ff0000" }],
      },
    ],
  };

  var mapElement = document.getElementById("map");

  var map = new google.maps.Map(mapElement, mapOptions);

  var addresses = ["New York"];

  for (var x = 0; x < addresses.length; x++) {
    // Use the correct Geocoding API endpoint with an API key
    window.$.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        address: addresses[x],
        key: "YOUR_API_KEY",
      },
      function (data) {
        if (data.results && data.results.length > 0) {
          var p = data.results[0].geometry.location;
          var latlng = new google.maps.LatLng(p.lat, p.lng);
          new google.maps.Marker({
            position: latlng,
            map: map,
            icon: "images/loc.png",
          });
        }
      }
    );
  }
}

// Use the 'load' event to ensure the script runs after Google Maps API is loaded
google.maps.event.addDomListener(window, "load", init);
