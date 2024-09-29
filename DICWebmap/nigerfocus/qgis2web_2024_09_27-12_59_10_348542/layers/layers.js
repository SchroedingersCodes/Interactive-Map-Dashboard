var wms_layers = [];

var format_nigboundaries_0 = new ol.format.GeoJSON();
var features_nigboundaries_0 = format_nigboundaries_0.readFeatures(json_nigboundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nigboundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nigboundaries_0.addFeatures(features_nigboundaries_0);
var lyr_nigboundaries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nigboundaries_0, 
                style: style_nigboundaries_0,
                popuplayertitle: "nigboundaries",
                interactive: false,
                title: '<img src="styles/legend/nigboundaries_0.png" /> nigboundaries'
            });
var format_Nigerstateboundary_1 = new ol.format.GeoJSON();
var features_Nigerstateboundary_1 = format_Nigerstateboundary_1.readFeatures(json_Nigerstateboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nigerstateboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nigerstateboundary_1.addFeatures(features_Nigerstateboundary_1);
var lyr_Nigerstateboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nigerstateboundary_1, 
                style: style_Nigerstateboundary_1,
                popuplayertitle: "Niger state boundary",
                interactive: false,
                title: '<img src="styles/legend/Nigerstateboundary_1.png" /> Niger state boundary'
            });

lyr_nigboundaries_0.setVisible(true);lyr_Nigerstateboundary_1.setVisible(true);
var layersList = [lyr_nigboundaries_0,lyr_Nigerstateboundary_1];
lyr_nigboundaries_0.set('fieldAliases', {'id': 'id', 'state_code': 'state_code', 'source': 'source', 'state_name': 'state_name', 'cap_city': 'cap_city', 'geo_zone': 'geo_zone', 'global_id': 'global_id', });
lyr_Nigerstateboundary_1.set('fieldAliases', {'id': 'id', 'state_code': 'state_code', 'source': 'source', 'state_name': 'state_name', 'cap_city': 'cap_city', 'geo_zone': 'geo_zone', 'global_id': 'global_id', });
lyr_nigboundaries_0.set('fieldImages', {'id': 'TextEdit', 'state_code': 'TextEdit', 'source': 'TextEdit', 'state_name': 'TextEdit', 'cap_city': 'TextEdit', 'geo_zone': 'TextEdit', 'global_id': 'TextEdit', });
lyr_Nigerstateboundary_1.set('fieldImages', {'id': 'TextEdit', 'state_code': 'TextEdit', 'source': 'TextEdit', 'state_name': 'TextEdit', 'cap_city': 'TextEdit', 'geo_zone': 'TextEdit', 'global_id': 'TextEdit', });
lyr_nigboundaries_0.set('fieldLabels', {'id': 'no label', 'state_code': 'no label', 'source': 'no label', 'state_name': 'no label', 'cap_city': 'no label', 'geo_zone': 'no label', 'global_id': 'no label', });
lyr_Nigerstateboundary_1.set('fieldLabels', {'id': 'no label', 'state_code': 'no label', 'source': 'no label', 'state_name': 'no label', 'cap_city': 'no label', 'geo_zone': 'no label', 'global_id': 'no label', });
lyr_Nigerstateboundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});