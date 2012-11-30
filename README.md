Leaflet.MultiTileLayer
==

An extension to [Leaflets][1] [TileLayer][2] class, adding support for defining a TileLayer in terms of serveral TileServer urls.

### Example
```javascript
function getCloudMadeUrl(styleId) {
	return 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/' + styleId + '/256/{z}/{x}/{y}.png';
}

var map = L.map('map').setView(L.latLng(50.5, 30.51), 0);

var cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade';

L.tileLayer.multi([{
	url: getCloudMadeUrl(997),
	minZoom: 0,
	maxZoom: 10
},{
	url: getCloudMadeUrl(998),
	minZoom: 11,
	maxZoom: 18
}], {
	attribution: cloudmadeAttribution
}).addTo(map);
```

--
[1]: http://www.leafletjs.com
[2]: https://github.com/CloudMade/Leaflet/blob/master/src/layer/tile/TileLayer.js