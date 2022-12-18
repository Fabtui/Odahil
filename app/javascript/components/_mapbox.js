import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFidHVpIiwiYSI6ImNrcnlwaDNiaTEybGQycHM3cHAzZ3g3anAifQ.RnY6rMFrvaxp-tVok4eLLw';

const mapBox = () => {
  // when bottom of window hit bottom of div backgroud go down depending on the scroll value
  const mapBoxContainer = document.querySelector('.mapbox-container')
  if (mapBoxContainer) {
    const map = new mapboxgl.Map({
        container: mapBoxContainer, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [4.846131, 45.762467], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');
    const marker = new mapboxgl.Marker({
      color: "rgb: (250, 250, 250)",
    })
    marker.setLngLat([4.846131, 45.762467])
    marker.addTo(map);
  }
}

export { mapBox };
