import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      <div className="cardList">    
        {
          props.cities.map((cities, index) => (
            <Card
              key={index}
              max={cities.main.temp_max}
              min={cities.main.temp_min}
              name={cities.name}
              img={cities.weather[0].icon}
              onClose={() => alert(cities.name)}
            />
          ))  
        }
      </div>
    </>
  )
};