var map = L.map('map').setView([37.5665, 126.9780], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.5665, 126.9780]).addTo(map)
    .bindPopup('Seoul')
    .openPopup();
