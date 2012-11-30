Leaflet.MultiTileLayer
==

An extension to [Leaflets][1] [TileLayer][2] class, adding support for defining a TileLayer in terms of serveral TileServer urls.

### Example
```javascript
var map = L.map('map').setView(L.latLng(57.7, 11.9), 12);

L.TileLayer.multi({
	14: {
		url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
		subdomains:'1234'
	},
	17: {
		url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
	}
}, {
	minZoom: 0,
	maxZoom: 17,
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; '
		+ '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
		+ '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
		+  '&mdash; '
		+ 'Tiles &copy; Esri &mdash; '
		+ 'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, '
		+ 'Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);
```

--
1: http://www.leafletjs.com
2: https://github.com/CloudMade/Leaflet/blob/master/src/layer/tile/TileLayer.js