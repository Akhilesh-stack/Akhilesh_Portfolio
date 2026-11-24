export const projects = [
  {
    name: "CodeZen",
    tagline: "AI-powered coding platform",
    date: "Sept 2025",
    github: "https://github.com/Akhilesh-stack/codingplatform",
    metrics: [
      { value: "500+", label: "submissions" },
      { value: "−30%", label: "backend latency" },
      { value: "Gemini", label: "AI feedback" },
    ],
    highlights: [
      "AI-powered coding platform with real-time feedback on submissions via the Gemini API.",
      "Admin dashboard with full CRUD for dynamic problem management.",
      "Cut backend latency by 30% using Redis caching and optimised indexing.",
      "Secure auth with JWT + Bcrypt; media managed with Cloudinary.",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redis", "Google Gen AI", "JWT", "Cloudinary"],
  },
  {
    name: "UberCaptain",
    tagline: "Real-time ride-hailing platform",
    date: "Jan 2026",
    github: "https://github.com/Akhilesh-stack/Uber-ride",
    metrics: [
      { value: "Live", label: "location tracking" },
      { value: "2-sided", label: "rider + captain" },
      { value: "JWT", label: "token blacklisting" },
    ],
    highlights: [
      "MERN ride-hailing platform inspired by Uber: user registration, captain onboarding, ride requests and ride management.",
      "Secure authentication & authorisation with JWT, protected routes and token blacklisting.",
      "Google Maps APIs + Socket.IO for real-time location tracking, route calculation and live ride status.",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "Google Maps API", "JWT", "Tailwind CSS"],
  },
];
