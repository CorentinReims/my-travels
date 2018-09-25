import React from "react";

const Travel = props => (
    <div>
        <h1>{props.destination}</h1>
        <h2>({props.country})</h2>
    <figure>
        <img src={props.image} alt={props.destination} />
        <figcaption>
            <blockquote>Distance depuis Reims: {props.distance}</blockquote>
        </figcaption>
    </figure>
    </div>
);

export default Travel;