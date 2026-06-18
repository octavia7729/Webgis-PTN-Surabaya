ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_2.png" /> <br />' });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/univ_surabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/univ_surabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/univ_surabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/univ_surabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/univ_surabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/univ_surabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/univ_surabaya_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_2_9.png" /> <br />' });
var format_PTNdi_Surabaya_3 = new ol.format.GeoJSON();
var features_PTNdi_Surabaya_3 = format_PTNdi_Surabaya_3.readFeatures(json_PTNdi_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNdi_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdi_Surabaya_3.addFeatures(features_PTNdi_Surabaya_3);
var lyr_PTNdi_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdi_Surabaya_3, 
                style: style_PTNdi_Surabaya_3,
                popuplayertitle: 'PTN di_Surabaya',
                interactive: true,
    title: 'PTN di_Surabaya<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdi_Surabaya_3_9.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_PTNdi_Surabaya_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2,lyr_PTNdi_Surabaya_3];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNdi_Surabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNdi_Surabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Berdiri': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdi_Surabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', 'Tahun Berdiri': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdi_Surabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});