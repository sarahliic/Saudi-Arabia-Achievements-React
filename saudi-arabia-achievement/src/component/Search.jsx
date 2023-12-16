import React from 'react'
import { useState } from "react";
// import achievements from "./achievements";
import achievements from "./Acheivement";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredAchievements = achievements.filter((achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredAchievements.map((achievement) => (
          <div key={achievement.id}>
            <h3>{achievement.title}</h3>
            <img src={achievement.img} alt={achievement.title} />
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    );
 
};

export default Search