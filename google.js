// Initialize and add the map
let map;

async function initMap(pos) {


  // The location of Uluru
  const position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });


  const geocoder = new google.maps.Geocoder();
  geocoder
  .geocode({ location: position })
  .then((response) => {
    if (response.results[0]) {
     

     

      console.log(response.results[0].formatted_address);
      
    } else {
      window.alert("No results found");
    }
  })
  .catch((e) => window.alert("Geocoder failed due to: " + e));
}

navigator.geolocation.getCurrentPosition(initMap);