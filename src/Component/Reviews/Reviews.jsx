import React from "react";
import "./Reviews.css";

import review1 from "../../assets/image1 (1).jpg";
import review2 from "../../assets/image 2.jpg";
import review3 from "../../assets/image7.jpg";

function Reviews() {
  const reviews = [
    {
      image: review1,
      name: "Rahul Sharma",
      role: "Client",
      review:
        "Samman developed my website exactly as I imagined. The design is clean, responsive, and delivered on time.",
    },
    {
      image: review2,
      name: "Priya Verma",
      role: "UI Designer",
      review:
        "Excellent React developer. Communication was smooth, and every requirement was implemented perfectly.",
    },
    {
      image: review3,
      name: "Amit Singh",
      role: "Freelance Client",
      review:
        "Very professional and talented. I highly recommend Samman for frontend and React development projects.",
    },
  ];

  return (
    <section className="reviews" id="reviews">

      <p className="review-subtitle">TESTIMONIALS</p>

      <h2 className="review-title">What Clients Say</h2>

      <div className="review-container">

        {reviews.map((item, index) => (

          <div className="review-card" key={index}>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="review-text">
              "{item.review}"
            </p>

            <div className="client">

              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;