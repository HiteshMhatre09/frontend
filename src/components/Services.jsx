
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/wedding1.jpeg",
      title: "Wedding Planning",
    },
   
    {
      id: 2,
      url: "/anniversery1.jpeg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/gamenight1.jpeg",
      title: "Game Night Planning",
    },
    {
      id: 4,
      url: "/camping1.jpeg",
      title: "Camping Trip Planning",
    },
  
    {
      id: 5,
      url: "/party1.jpeg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/birthday1.jpeg",
      title: "Birthday Planning",
    },
   
  ];
  return (
    <>
      <div className="services container">
        <h2>SERVICES WE PROVIDE</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;