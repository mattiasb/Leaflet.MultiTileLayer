[Leaflet.MultiTileLayer][3]
==

A [Leaflet][1] plugin, adding support for defining a [TileLayer][2] in terms of several TileServer urls.

### Usage
```javascript
var map = L.map('map').setView(L.latLng(57.7, 11.9), 12);

L.TileLayer.multi({
	14: { // this layer is shown at zoomlevels between minZoom and 14 (ie 0,1,..,13,14)
		url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
		subdomains:'1234'
	},
	17: { // this layer is shown at zoomlevels between maxZoom of 
          // previous layer and 17 (ie 15, 16 and 17)
		url: 'http://server.arcgisonline.com/ArcGIS/' 
           + 'rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
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

### Testing

```bash
git clone https://github.com/moonlite/Leaflet.MultiTileLayer
cd Leaflet.MultiTileLayer
git submodule update --init
xdg-open examples/index.html # Just "open" on MacOS
```
 
--
[1]: http://www.leafletjs.com
[2]: https://github.com/CloudMade/Leaflet/blob/master/src/layer/tile/TileLayer.js
[3]: http://moonlite.github.com/Leaflet.MultiTileLayer/
