//Set API Token
mapboxgl.accessToken = 'pk.eyJ1IjoiandhZ2xlciIsImEiOiJja2d4dms3dGUwNWU0Mnl0OG5pcTZycTZlIn0.Cp002MjA3sIzuSSDoNWsYw';

//Set the boundaries of the map
var bounds = [
	[-88.20, 41.60], //Southwest
	[-87.39, 42.04] //Northeast
]

//Initialize the map
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-87.64, 41.87],
	zoom: 12.5,
	maxBounds: bounds
});

var i;
var marker = [];
for (i = 0; i < 10; i++){
	marker[i] = new mapboxgl.Marker()
	.setLngLat([-87.64 - (i*0.001), 41.87 + (i*0.001)])
	.setPopup(new mapboxgl.Popup().setHTML(i)) // add popup
	.addTo(map);
}
