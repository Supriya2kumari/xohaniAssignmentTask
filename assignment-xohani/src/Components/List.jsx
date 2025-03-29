import React from "react";
import { Star } from 'lucide-react';
import { Contact } from 'lucide-react';

const webinars = [
  {
    title: "The Psychology of High-Performing Teams",
    description:
      "Discover the science behind team dynamics, motivation, and productivity. Learn how top-performing teams communicate, collaborate, and innovate in high-pressure environments.",
    enrolled: 430,
    rating: 4.8,
    price: "$99",
  },
  {
    title: "AI-Powered Marketing: The Future of Customer Engagement",
    description:
      "Explore how AI is revolutionizing digital marketing. From personalized recommendations to AI-generated content, learn how to optimize your marketing strategy with cutting-edge technology.",
    enrolled: 1450,
    rating: 4.5,
    price: "$49",
  },
  {
    title: "From Side Hustle to Startup: Turning Ideas into Income",
    description:
      "Have an idea but don’t know where to start? This webinar walks you through building a profitable business, from validating your idea to launching and scaling it.",
    enrolled: 1000,
    rating: 4.6,
    price: "$1.5",
  },
  {
    title: "Mastering Sleep: The Secret to Peak Performance",
    description:
      "Learn how to optimize your sleep for better focus, energy, and productivity. Discover science-backed techniques to improve sleep quality and wake up refreshed every day.",
    enrolled: 550,
    rating: 4.5,
    price: "$19",
  },
];

function WebinarListng() {

  return (
    <div style={{width: "70%", margin: "auto"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", padding: "0 10px 0"}}>
        <h3 style={{color: "blue"}}>LOGO</h3>
        <button style={{backgroundColor: "blue", color: "white", cursor: "pointer"}}>+ Create Webinar</button>
      </div>
      <div style={{display: "flex"}}>
        <button style={{backgroundColor: "blue", color: "white", marginTop: "17px"}}>Home</button>
        <button style={{backgroundColor: "white", color: "black", marginTop: "17px"}}>My bookmarks</button>
      </div>
      <div style={{marginTop: "20px"}}>
        {webinars.map((webinar, index) => (
            
          <div style={{display: "flex",  justifyContent: "space-between", backgroundColor: "white", padding: "15px", marginBottom: "5px", boxShadow: "box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;", borderRadius: "15px"}} key={index}>
            <div> <Contact /> </div>
            <div className="webinar-info">
              <h3>{webinar.title}</h3>
              <p>{webinar.description}</p>
              <p className="enrolled" style={{color: "gray", fontSize: "12px"}}>{webinar.enrolled} people have enrolled till now</p>
            </div>
            <div className="webinar-meta">
              <span > <Star /> {webinar.rating}</span>
              <span style={{backgroundColor: "blue", color: "white", padding: "2px 4px", borderRadius: "4px"}}>Active</span>
              <span >Price: {webinar.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "15px"}}>
        <button style={{backgroundColor: "blue", color: "white", border: "none", borderRadius: "25px", padding: "7px 10px"}}>←</button>
        <span>39</span>
        <button style={{backgroundColor: "blue", color: "white", border: "none", borderRadius: "25px", padding: "7px 10px", Bottom: "10px"}}>→</button>
      </div>
    </div>
  );
};

export default WebinarListing;