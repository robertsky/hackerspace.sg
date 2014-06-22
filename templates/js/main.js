var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var hackerspacsgLoc = new google.maps.LatLng(1.310420,103.862409);
	var mapOptions = {
		center: hackerspacsgLoc,
		zoom: 17
	};
	map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
	var currCenter = map.getCenter();
	$('#drop-in').on('shown.bs.modal', function(e) {
		google.maps.event.trigger(map, "resize");
		map.setCenter(currCenter);
	});
	var hsgMarker = new google.maps.Marker({
		position: hackerspacsgLoc,
		map: map,
		title: "HackerspaceSG",
		icon: 'img/crestlogo.png'
	});
	directionsDisplay.setMap(map);
}

function calcRoute() {
	var start;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
		})
	}
}

google.maps.event.addDomListener(window, 'load', initialize);

