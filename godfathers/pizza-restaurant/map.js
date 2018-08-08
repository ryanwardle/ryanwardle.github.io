

function initMap(){
  let options = {
    zoom: 16,
    center: {lat: 39.982642, lng: -83.004898}
  }

  let map = new google.maps.Map(document.getElementById('map'), options)

  let marker = new google.maps.Marker({
    position:{lat: 39.982642, lng: -83.004898},
    map:map
  });

  let info = new google.maps.InfoWindow({
    content: "<p>Godfather's Pizza<br>981 N. High St.</p>"
  });

  marker.addListener('click', function(){
    info.open(map, marker);
  });
}
