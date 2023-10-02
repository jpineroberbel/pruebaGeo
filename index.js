function obtengoPosicion(coordenadas)
{
    
var map = L.map('map').setView([coordenadas.coords.latitude, coordenadas.coords.longitude], 13);
    console.log(coordenadas.coords.latitude);
}


if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(obtengoPosicion);
}
else
    console.log("Geolocalizacion no soportada")