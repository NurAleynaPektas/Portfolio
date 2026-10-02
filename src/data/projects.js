import barberBook from "../assets/bar.png";
import trendPick from "../assets/miniShopPortf.png";
import qrMenu from "../assets/qrMenu.png";
import cinePlus from "../assets/cinePortf.png";
import travelMate from "../assets/travelMatePortf.png";

import moneyGuard from "../assets/moneyGuardPortf.png";
import slimMom from "../assets/slim.png";
import greenHarvest from "../assets/greenHarvestPortf.png";
import cinemania from "../assets/cinemaniaPortf.png";

export const featuredProjects = [
  {
    id: 1,
    number: "01",
    title: "BarberBook",
    category: "Full-Stack Application",
    description:
      "A full-stack booking platform where users can manage appointments while barbers handle schedules and bookings through a dedicated dashboard. Built with authentication, protected routes and a REST API.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: barberBook,
    live: "https://client-osj4.onrender.com/",
    github: "https://github.com/NurAleynaPektas/client",
    backend: "https://barber-backend-3dn6.onrender.com/",
    backendGithub: "https://github.com/NurAleynaPektas/barber-backend",
  },

  {
    id: 2,
    number: "02",
    title: "QR Menu",
    category: "Full-Stack Restaurant Platform",
    description:
      "A full-stack restaurant platform where customers browse the menu via QR code, place orders digitally, and staff manage incoming orders through dedicated kitchen and management interfaces.",
    technologies: ["React", "Redux", "Node.js", "Express", "JWT"],
    image: qrMenu,
    live: "https://qr-menuu.vercel.app/",
    github: "https://github.com/NurAleynaPektas/qrMenu",
  },

  {
    id: 3,
    number: "03",
    title: "TrendPick",
    category: "E-Commerce Experience",
    description:
      "A responsive e-commerce application with product discovery, authentication and state-driven shopping interactions, built to deliver a clean and intuitive user experience.",
    technologies: ["React", "Redux", "JWT"],
    image: trendPick,
    live: "https://mini-shop-beta.vercel.app/",
    github: "https://github.com/NurAleynaPektas/miniShop",
  },

  {
    id: 4,
    number: "04",
    title: "CinePlus",
    category: "Movie Discovery Platform",
    description:
      "A movie discovery application powered by the TMDB API, allowing users to explore films, view detailed information and watch trailers through a responsive cinematic interface.",
    technologies: ["React", "TMDB API", "JavaScript"],
    image: cinePlus,
    live: "https://cine-flax.vercel.app/",
    github: "https://github.com/NurAleynaPektas/cine",
  },

  {
    id: 5,
    number: "05",
    title: "TravelMate",
    category: "Travel & Maps",
    description:
      "An interactive travel discovery application using Geoapify and Leaflet, allowing users to explore locations and navigate geographic data through a dynamic map-based interface.",
    technologies: ["React", "Geoapify", "Leaflet"],
    image: travelMate,
    live: "https://travelmate-geoapify.vercel.app/",
    github: "https://github.com/NurAleynaPektas/travelmate-geoapify",
  },
];

export const collaborativeProjects = [
  {
    id: 1,
    title: "MoneyGuard",
    technologies: ["React", "Team Project"],
    image: moneyGuard,
    live: "https://moneyguard-liart.vercel.app/",
    github: "https://github.com/Project-Kodexa/MoneyGuard",
  },

  {
    id: 2,
    title: "SlimMom",
    technologies: ["React", "Team Project"],
    image: slimMom,
    live: "https://slim-mom-frontend-2.vercel.app/",
    github: "https://github.com/Calcora/SlimMom-Frontend-2",
  },

  {
    id: 3,
    title: "GreenHarvest",
    technologies: ["HTML", "CSS"],
    image: greenHarvest,
    live: "https://d-coderss.github.io/GreenHarvest/",
    github: "https://github.com/D-Coderss/GreenHarvest",
  },

  {
    id: 4,
    title: "Cinemania",
    technologies: ["JavaScript", "TMDB API", "Team Project"],
    image: cinemania,
    live: "https://betultopkan.github.io/cinemaniaa/",
    github: "https://github.com/Popcorn-Madness/cinemaniaa",
  },
];
