import React from 'react';
import '../css/Card.css';

export default function Card({person}) {
  return (
    <div className='p-50'>
        <img className='mw-750' alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
        <div>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
        </div>
      
    </div>
  )
}
