// Import GSAP
import gsap from "gsap"

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const disasterCards = document.querySelectorAll(".disaster-card")
const sosButton = document.querySelector(".btn-sos")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
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

// Disaster Cards
disasterCards.forEach((card) => {
  card.addEventListener("click", () => {
    const disasterType = card.getAttribute("data-disaster")

    // Save selected disaster to session storage
    sessionStorage.setItem("selectedDisaster", disasterType)

    // Redirect to help selection page
    window.location.href = "help-selection.html"
  })
})

// SOS Button
sosButton.addEventListener("click", () => {
  alert("SOS signal sent! Emergency services have been notified.")
})

// Helper Functions
function initAnimations() {
  // Animate header
  gsap.from(".screen-header", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power3.out",
  })

  // Animate SOS button
  gsap.from(".sos-button", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  })

  // Animate content
  gsap.from(".disaster-content h3", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
  })

  // Animate disaster cards
  gsap.from(".disaster-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.7,
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

