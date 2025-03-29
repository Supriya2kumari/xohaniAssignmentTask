import React from "react";

const webinars = [
  {
    title: "The Psychology of High-Performing Teams",
    description: "Learn how high-performing teams communicate and innovate.",
    enrolled: 450,
    price: 99,
    rating: 4.8,
  },
  {
    title: "AI-Powered Marketing",
    description: "Explore how AI is revolutionizing digital marketing.Form personalized recommandations to AI-generated content, learn how to optimize your marketing strategy with cutting-edge technology.",
    enrolled: 1450,
    price: 49,
    rating: 4.5,
  },
  {
    title: "From Side Hustle to Startup",
    description: "This webinar walks you through building a profitable business.",
    enrolled: 1000,
    price: 1.5,
    rating: 4.6,
  },
  {
    title: "Mastering Sleep",
    description: "Discover science-backed techniques to improve sleep.",
    enrolled: 550,
    price: 19,
    rating: 4.5,
  },
];

function Home () {
  return (
    <div>
      <div className="container">
        {webinars.map((webinar, index) => (
          <Card key={index} {...webinar} />
        ))}
      </div>
    </div>
  );
};

export default Home;