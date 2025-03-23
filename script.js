// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const welcomeScreen = document.getElementById("welcome-screen")
const getStartedBtn = document.getElementById("get-started-btn")
const loginScreen = document.getElementById("login-screen")
const loginForm = document.getElementById("login-form")

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

// Get Started Button
getStartedBtn.addEventListener("click", () => {
  changeScreen(welcomeScreen, loginScreen)
})

// Login Form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const fullName = document.getElementById("full-name").value
  const phoneNumber = document.getElementById("phone-number").value

  // Save user info to session storage
  sessionStorage.setItem("userName", fullName)
  sessionStorage.setItem("userPhone", phoneNumber)

  // Redirect to disaster selection page
  window.location.href = "disaster-selection.html"
})

// Helper Functions
function changeScreen(fromScreen, toScreen) {
  // Hide current screen
  fromScreen.classList.remove("active")

  // Show target screen with animation
  setTimeout(() => {
    toScreen.classList.add("active")
  }, 100)

  // Animate blobs
  animateBlobs()
}

function initAnimations() {
  // Initialize GSAP animations
  gsap.from(".welcome-screen", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  })

  gsap.from(".app-title", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  })

  gsap.from(".app-tagline", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
  })

  gsap.from(".hero-image", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
  })

  gsap.from(".get-started-btn", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.9,
    ease: "power3.out",
  })

  // Animate blobs initially
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

