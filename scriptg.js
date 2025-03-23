let map;
let userMarker;

// Initialize Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Default (India)
        zoom: 5
    });
}

// Get user's current location
document.getElementById("getLocation").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(userLocation);
                map.setZoom(15);

                if (userMarker) {
                    userMarker.setMap(null);
                }

                userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Your Location"
                });

                document.getElementById("locationOutput").textContent = 
                    `Latitude: ${userLocation.lat}, Longitude: ${userLocation.lng}`;
            },
            () => {
                alert("Geolocation failed. Please allow location access.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Send location to the server
document.getElementById("sendLocation").addEventListener("click", function() {
    if (userMarker) {
        const lat = userMarker.getPosition().lat();
        const lng = userMarker.getPosition().lng();

        const locationData = { latitude: lat, longitude: lng };

        fetch("http://127.0.0.1:3000/save-location", {  // Change URL to your backend API
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(locationData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Location sent successfully!");
        })
        .catch(error => {
            console.error("Error sending location:", error);
            alert("Failed to send location. Check the server.");
        });
    } else {
        alert("No location selected yet!");
    }
});
