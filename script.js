require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer)  {
        var map = new Map({
          basemap: "gray"
        });
    var view = new MapView({
          map: map,
          container: "viewDiv",
          center: [-90, 38.636],
          zoom: 10
                 });
   
 var featureLayer = new FeatureLayer({
   url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/ZooGDBFinal_WFL1/FeatureServer/1"
   });
   map.add(featureLayer)

var featurelayer2 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/ZooGDBFinal_WFL1/FeatureServer/0"  
});
   map.add(featurelayer2)
    });
   
