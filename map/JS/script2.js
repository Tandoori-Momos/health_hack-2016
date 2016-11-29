$(document).ready(function(){

// Initialize Firebase
// Initialize Firebase

var config = {
	apiKey: "AIzaSyCOURS0NEPNn1Kfmo_ReWTyo2b68UE0Ib0",
	authDomain: "hackiiitd-bed23.firebaseapp.com",
	databaseURL: "https://hackiiitd-bed23.firebaseio.com",
	storageBucket: "hackiiitd-bed23.appspot.com",
};

firebase.initializeApp(config);

var locData = firebase.database().ref("/");
locData.on("value", function(d){
	console.log(d.val());
});


function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 20,
		center: {lat: 28.5463794, lng: 77.2722892}
	});

	directionsDisplay.setMap(map);
	
	function showPosition(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		map.setCenter(new google.maps.LatLng(lat, lng));
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} 
	}

	getLocation();  
	calculateAndDisplayRoute(directionsService, directionsDisplay,map);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, map) {
	var waypts = [];
	var checkboxArray = [{lat: 28.5463794, lng: 77.2722892},{lat: 28.55504, lng: 77.247161}];
	for (var i = 0; i < checkboxArray.length; i++) {
		waypts.push({
			location: checkboxArray[i],
			stopover: true
		});
	} 

	var origin = map.getCenter();
	
	directionsService.route({
		origin: origin,
		destination: origin,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

initMap();

});