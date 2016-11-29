$(document).ready(function(){

// Initialize Firebase

var config = {
	apiKey: "AIzaSyCOURS0NEPNn1Kfmo_ReWTyo2b68UE0Ib0",
	authDomain: "hackiiitd-bed23.firebaseapp.com",
	databaseURL: "https://hackiiitd-bed23.firebaseio.com",
	storageBucket: "hackiiitd-bed23.appspot.com",
};

var lat, lng;

firebase.initializeApp(config);

var locData = firebase.database().ref("/");

locData.on("value", function(d){

	d = d.val();
	var stops = [];

	for(x in d){
		console.log(x)
		stops.push({location: new google.maps.LatLng(d[x].lat, d[x].lng), stopover: true});
	}

	//console.log(stops);
	initMap(stops);
});


function initMap(stops) {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 20,
		center: {lat: 28.475375, lng: 77.207222}
	});

	directionsDisplay.setMap(map);
	
	function showPosition(position) {
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		map.setCenter(new google.maps.LatLng(lat, lng));
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} 
	}

	getLocation();  
	calculateAndDisplayRoute(directionsService, directionsDisplay, map, stops);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, map, stops) {

	request = {
		origin: map.getCenter(),
		destination:  map.getCenter(),
		waypoints: stops,
		travelMode: 'DRIVING',
	}
	
	directionsService.route(request, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

});