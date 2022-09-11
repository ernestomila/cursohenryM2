import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <>
      <div className="card">
        <div className="btn btn-danger" onClick={props.onClose}>X</div>
        <div>
          <h5 className="card-title">{props.name}</h5>
          <section className="sectionCard">
            <div>
              <h5 className="card-title">Min</h5>
              <p className="card-text">{Math.floor(props.min) + "º"}</p>
            </div>

            <div>
              <h5 className="card-title">Max</h5>
              <p className="card-text">{Math.floor(props.max) + "º"}</p>
            </div>

            <img src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}/>
          </section>
          
        </div>
      </div>
    </>  
  )
};