//Map Creation
    var map = L.map('map').setView([0.000413, 0.00018], 24);
    L.tileLayer('../map/{z}/{x}/{y}.webp', {
        continuousWorld: false,
        noWrap: true,	
        minZoom: 20,
        maxZoom: 25,
    }).addTo(map);

//Dummy Coordinate Marker
    var marker = L.marker([0.000413, 0.00018], {
        draggable: true,
    }).addTo(map);
    marker.bindPopup('LatLng Marker').openPopup();
    marker.on('dragend', function(e) {
        marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
    });
//Markers

//Marker Visbility Controls
L.control.layers(null, overlays).addTo(map);

