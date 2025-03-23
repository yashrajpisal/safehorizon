// Import gsap (if not already imported)
import gsap from "gsap"

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const victimForm = document.getElementById("victim-form")
const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")
const victimCountInput = document.getElementById("victim-count")
const refreshLocationBtn = document.getElementById("refresh-location")
const disasterDisplay = document.getElementById("disaster-display")
const helpDisplay = document.getElementById("help-display")
const helpTypeDisplay = document.getElementById("help-type-display")
const locationStatus = document.getElementById("location-status")
const latitudeDisplay = document.getElementById("latitude")
const longitudeDisplay = document.getElementById("longitude")
const accuracyDisplay = document.getElementById("accuracy")
const coordinatesBox = document.getElementById("coordinates-box")

// Location data
let locationData = {
  latitude: null,
  longitude: null,
  accuracy: null,
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Display selected disaster and help type
  const selectedDisaster = sessionStorage.getItem("selectedDisaster")
  const selectedHelp = sessionStorage.getItem("selectedHelp")

  if (selectedDisaster) {
    disasterDisplay.textContent = capitalizeFirstLetter(selectedDisaster)
  }

  if (selectedHelp) {
    helpDisplay.textContent = capitalizeFirstLetter(selectedHelp)
    helpTypeDisplay.textContent = capitalizeFirstLetter(selectedHelp)
  }

  // Get user location
  getUserLocation()

  // Initialize animations
  initAnimations()
})

// Theme Toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")

  // Save theme preference
  const isDarkTheme = document.body.classList.contains("dark-theme")
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
})

// Increment and Decrement Buttons
incrementBtn.addEventListener("click", () => {
  victimCountInput.value = Number.parseInt(victimCountInput.value) + 1
})

decrementBtn.addEventListener("click", () => {
  const currentValue = Number.parseInt(victimCountInput.value)
  if (currentValue > 1) {
    victimCountInput.value = currentValue - 1
  }
})

// Refresh Location Button
refreshLocationBtn.addEventListener("click", () => {
  getUserLocation()
})

// Form Submission
victimForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const victimCount = victimCountInput.value
  const urgencyLevel = document.getElementById("urgency-level").value
  const additionalInfo = document.getElementById("additional-info").value

  // Save form data to session storage
  sessionStorage.setItem("victimCount", victimCount)
  sessionStorage.setItem("urgencyLevel", urgencyLevel)
  sessionStorage.setItem("additionalInfo", additionalInfo)
  sessionStorage.setItem("locationData", JSON.stringify(locationData))

  // Generate a random request ID
  const requestId = "SH-" + new Date().getFullYear() + "-" + Math.floor(10000 + Math.random() * 90000)
  sessionStorage.setItem("requestId", requestId)

  // Redirect to confirmation page
  window.location.href = "confirmation.html"
})

// Helper Functions
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getUserLocation() {
  if (navigator.geolocation) {
    locationStatus.textContent = "Detecting your location..."
    coordinatesBox.style.display = "none"

    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        }

        // Update UI
        latitudeDisplay.textContent = position.coords.latitude.toFixed(6)
        longitudeDisplay.textContent = position.coords.longitude.toFixed(6)
        accuracyDisplay.textContent = Math.round(position.coords.accuracy)

        locationStatus.textContent = "Location detected successfully!"
        locationStatus.style.color = "var(--success-color)"
        coordinatesBox.style.display = "block"
      },
      // Error callback
      (error) => {
        console.error("Error getting location:", error)
        locationStatus.textContent = "Could not detect your location. Please try again."
        locationStatus.style.color = "var(--error-color)"
        coordinatesBox.style.display = "none"
      },
      // Options
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    )
  } else {
    locationStatus.textContent = "Geolocation is not supported by your browser."
    locationStatus.style.color = "var(--error-color)"
    coordinatesBox.style.display = "none"
  }
}

function initAnimations() {
  // Animate header
  gsap.from(".screen-header", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power3.out",
  })

  // Animate request summary
  gsap.from(".request-summary", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  })

  // Animate form elements
  gsap.from(".form-group", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: "power3.out",
  })

  // Animate location section
  gsap.from(".location-section", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.9,
    ease: "power3.out",
  })

  // Animate form actions
  gsap.from(".form-actions", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.1,
    ease: "power3.out",
  })

  // Animate blobs
  animateBlobs()
}

function animateBlobs() {
  // Animate background blobs
  gsap.to(".blob-1", {
    x: gsap.utils.random(-100, 100),
    y: gsap.utils.random(-100, 100),
    scale: gsap.utils.random(0.8, 1.2),
    duration: 10,
    ease: "sine.inOut",
  })

  gsap.to(".blob-2", {
    x: gsap.utils.random(-100, 100),
    y: gsap.utils.random(-100, 100),
    scale: gsap.utils.random(0.8, 1.3),
    duration: 12,
    ease: "sine.inOut",
  })

  gsap.to(".blob-3", {
    scale: gsap.utils.random(0.9, 1.4),
    opacity: gsap.utils.random(0.3, 0.6),
    duration: 8,
    ease: "sine.inOut",
  })
}

