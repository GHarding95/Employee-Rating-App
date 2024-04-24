import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

export default function Cards({ person }) {
  const rating = useSelector((state) => state.counter.ratingsMap[person.id]);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment({id: person.id}));
  };

  const handleDecrement = () => {
    dispatch(decrement({id: person.id}));
  };

  return (
    <div className="p-50">
      <img className="mw-750" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
        <p>{person.address}</p>

        <br/>

        <h3>Employee Rating</h3>

        <div className='flex'>
        <button aria-label="Decrement value" onClick={handleDecrement}>
            -
          </button>
            <p>{rating}</p>
          <button aria-label="Increment value" onClick={handleIncrement}>
            +
          </button>
        </div>

      </div>
    </div>
  );
}
