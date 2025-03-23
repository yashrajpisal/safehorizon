// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const menuToggleBtn = document.getElementById("menu-toggle")
const sidebar = document.querySelector(".sidebar")
const emergencyCards = document.querySelectorAll(".emergency-card")
const sosButton = document.querySelector(".btn-sos")

// Import GSAP
import gsap from "gsap"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Initialize animations
  initDashboardAnimations()
})

// Theme Toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")

  // Save theme preference
  const isDarkTheme = document.body.classList.contains("dark-theme")
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
})

// Menu Toggle (Mobile)
menuToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active")
})

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    !e.target.closest(".sidebar") &&
    !e.target.closest(".menu-toggle") &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active")
  }
})

// Emergency Cards
emergencyCards.forEach((card) => {
  card.addEventListener("click", () => {
    const emergencyType = card.querySelector("h3").textContent.toLowerCase()
    // In a real app, you would navigate to the specific emergency page
    alert(`You selected ${emergencyType} emergency. Redirecting to assistance page...`)
  })
})

// SOS Button
sosButton.addEventListener("click", () => {
  // In a real app, this would trigger an emergency call or alert
  alert("SOS signal sent! Emergency services have been notified.")
})

// Helper Functions
function initDashboardAnimations() {
  // Animate header elements
  gsap.from(".dashboard-header", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })

  gsap.from(".sos-button", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "back.out(1.7)",
  })

  // Animate content
  gsap.from(".dashboard-content h2", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
  })

  // Animate emergency cards
  gsap.from(".emergency-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.7,
    ease: "power3.out",
  })
}

