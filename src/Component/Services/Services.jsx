import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Creating modern, user-friendly, and visually appealing interfaces with a focus on usability and user experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building responsive and interactive websites using React.js, JavaScript, Bootstrap, CSS, and HTML.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Designing websites that look perfect on desktops, tablets, and mobile devices with seamless responsiveness.",
    },
  ];

  return (
    <section className="services" id="services">

      <p className="section-subtitle">WHAT I DO</p>

      <h2 className="section-title">
        Services
      </h2>

      <div className="services-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;