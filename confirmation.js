// Import necessary modules (if using a module bundler)
import gsap from "gsap"

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const requestIdDisplay = document.getElementById("request-id")
const disasterDisplay = document.getElementById("conf-disaster")
const helpDisplay = document.getElementById("conf-help")
const countDisplay = document.getElementById("conf-count")
const urgencyDisplay = document.getElementById("conf-urgency")
const locationDisplay = document.getElementById("conf-location")
const trackRequestBtn = document.getElementById("track-request-btn")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Display request details from session storage
  const requestId = sessionStorage.getItem("requestId")
  const selectedDisaster = sessionStorage.getItem("selectedDisaster")
  const selectedHelp = sessionStorage.getItem("selectedHelp")
  const victimCount = sessionStorage.getItem("victimCount")
  const urgencyLevel = sessionStorage.getItem("urgencyLevel")
  const locationData = JSON.parse(sessionStorage.getItem("locationData"))

  if (requestId) {
    requestIdDisplay.textContent = requestId
  }

  if (selectedDisaster) {
    disasterDisplay.textContent = capitalizeFirstLetter(selectedDisaster)
  }

  if (selectedHelp) {
    helpDisplay.textContent = capitalizeFirstLetter(selectedHelp)
  }

  if (victimCount) {
    countDisplay.textContent = victimCount
  }

  if (urgencyLevel) {
    urgencyDisplay.textContent = capitalizeFirstLetter(urgencyLevel)
  }

  if (locationData && locationData.latitude && locationData.longitude) {
    locationDisplay.textContent = `Latitude: ${locationData.latitude.toFixed(6)}, Longitude: ${locationData.longitude.toFixed(6)}`
  } else {
    locationDisplay.textContent = "Location data not available"
  }

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

// Track Request Button
trackRequestBtn.addEventListener("click", () => {
  alert("Request tracking feature will be available soon!")
})

// Helper Functions
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function initAnimations() {
  // Animate header
  gsap.from(".screen-header", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power3.out",
  })

  // Animate confirmation icon
  gsap.from(".confirmation-icon", {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    delay: 0.3,
    ease: "back.out(1.7)",
  })

  // Animate confirmation message
  gsap.from(".confirmation-content h3, .confirmation-message", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.1,
    ease: "power3.out",
  })

  // Animate request ID
  gsap.from(".request-id", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.7,
    ease: "power3.out",
  })

  // Animate details box
  gsap.from(".details-box", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.9,
    ease: "power3.out",
  })

  // Animate location box
  gsap.from(".location-box", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.1,
    ease: "power3.out",
  })

  // Animate emergency contact
  gsap.from(".emergency-contact", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.3,
    ease: "power3.out",
  })

  // Animate action buttons
  gsap.from(".action-buttons", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.5,
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

