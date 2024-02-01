import React from "react";

const TopButtons = () => {
    const cities = [
      {
        id: 1,
        title: 'Hapur',
      },
      {
        id: 2,
        title: 'Delhi',
      },
      {
        id: 3,
        title: 'Mumbai',
      },
      {
        id: 4,
        title: 'Lucknow',
      },
      {
        id: 5,
        title: 'Punjab',
      },
    ];
  
    return (
      <div className="top-btn-container">
        {cities.map((city) => 
          <button key={city.id} className="top-btn">{city.title}</button>
        )}
      </div>
    );
  };
  
  export default TopButtons;
