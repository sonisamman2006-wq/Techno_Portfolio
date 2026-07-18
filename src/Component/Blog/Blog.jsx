import React from "react";
import "./Blog.css";

import blog1 from "../../assets/image3.jpg";
import blog2 from "../../assets/image4.jpg";
import blog3 from "../../assets/image6.jpg";

function Blog() {
  const blogs = [
    {
      image: blog1,
      category: "React",
      date: "July 2026",
      title: "Building Modern React Applications",
      description:
        "Learn how to create fast, responsive, and scalable web applications using React and modern frontend practices.",
    },
    {
      image: blog2,
      category: "JavaScript",
      date: "June 2026",
      title: "JavaScript Tips Every Developer Should Know",
      description:
        "Discover useful JavaScript tricks and ES6 features that improve code readability and performance.",
    },
    {
      image: blog3,
      category: "Web Design",
      date: "May 2026",
      title: "Creating Responsive Websites",
      description:
        "Understand responsive design principles using Flexbox, Grid, and modern CSS techniques.",
    },
  ];

  return (
    <section className="blog" id="blog">

      <p className="blog-subtitle">LATEST BLOGS</p>

      <h2 className="blog-title">From My Blog</h2>

      <div className="blog-container">

        {blogs.map((blog, index) => (

          <div className="blog-card" key={index}>

            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">

              <div className="blog-info">
                <span>{blog.category}</span>
                <small>{blog.date}</small>
              </div>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button>Read More →</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Blog;