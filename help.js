// Import GSAP
import gsap from "gsap"

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const helpCards = document.querySelectorAll(".help-card")
const disasterTypeDisplay = document.getElementById("disaster-type-display")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Display selected disaster type
  const selectedDisaster = sessionStorage.getItem("selectedDisaster")
  if (selectedDisaster) {
    disasterTypeDisplay.textContent = capitalizeFirstLetter(selectedDisaster)
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

// Help Cards
helpCards.forEach((card) => {
  card.addEventListener("click", () => {
    const helpType = card.getAttribute("data-help")

    // Save selected help type to session storage
    sessionStorage.setItem("selectedHelp", helpType)

    // Redirect to victim count page
    window.location.href = "victim-count.html"
  })
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

  // Animate content
  gsap.from(".help-content h3", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  })

  // Animate help cards
  gsap.from(".help-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: "power3.out",
  })

  // Animate important note
  gsap.from(".important-note", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1,
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

