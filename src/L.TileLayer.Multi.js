L.TileLayer.Multi = L.TileLayer.extend({
	initialize: function (defs, options) {
		L.TileLayer.prototype.initialize.call(this, undefined, options);
		this._urls = {};
		this._initUrls(defs);
	},
	_initUrls: function(defs){
		for(var i=0;i<defs.length;i++){
			var z, def = defs[i];
			for(z=def.minZoom;z<=def.maxZoom;z++){
				this._urls[z] = def.url;
			}
		}
	},
	setUrl: function() {},
	getTileUrl: function (tilePoint) {
		var zoom = this._getZoomForUrl();
		this._adjustTilePoint(tilePoint);

		return L.Util.template(this._urls[zoom], L.extend({
			s: this._getSubdomain(tilePoint),
			z: zoom,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	}
});

L.tileLayer.multi = function(defs, options){
	return new L.TileLayer.Multi(defs,options);
};
