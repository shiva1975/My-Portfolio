import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Tail from "./components/Tail"; // ✅ Import Tail.jsx
import Footer from "./components/Footer";

import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

function App() {
  const projects = [
    {
      index: 1,
      title: "Weather App Using React JS",
      description:
        "A Weather App using React JS (2024) fetches real-time weather data using a Weather API...",
      image: project1,
      link: "https://github.com/shiva1975/weather-port/tree/main/wetherproject",
    },
    {
      index: 2,
      title: "Vehicle Renting App",
      description:
        "A UI/UX design project based on the real-world query for renting a vehicle for different locations.",
      image: project2,
      link: "https://www.figma.com/design/zRP050arLUM1V09IsraL1M/Rental-app-for-mobile-(with-bike-%26-cars)-by-shiva-Dheeraj-(Community)?t=StI1Tca0lniQzeMo-0",
    },
    {
      index: 3,
      title: "Hospital Management System",
      description: "A front-end project.",
      image: project3,
      link: "https://github.com/shiva1975/hostipal-project-using-tailwindcss",
    },
  ];

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <About />
                {projects.map((project) => (
                  <Work key={project.index} {...project} />
                ))}
                <Tail />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Tail />} /> {/* ✅ Route for Tail.jsx */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
