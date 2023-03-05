import React from 'react';
import { useState } from 'react';

function Trophies({
  item,
  completeTrophy,
  updateUserTrophies,
  isUserLoggedIn,
}) {
  const [buttonMessage, setButtonMessage] = useState('Complete');

  return (
    <div className={!item.completed ? 'trophy-card' : 'completed-trophy-card'}>
      <img src={item.gameimg} alt="" className="card-img" />
      <div className="trophy-text">
        <h3>{item.title}</h3>
        <h4>{item.description}</h4>
      </div>
      <p>{item.direction}</p>
      <div className="trophy-img-container  ">
        <img className="trophy-img " src={item.trophyimg} />
        <button
          onClick={() => {
            if (isUserLoggedIn === true) {
              completeTrophy(item.trophyid);
              updateUserTrophies(item);
            } else {
              completeTrophy(item.trophyid);
            }
          }}
          className="completed-btn "
        >
          {buttonMessage}
        </button>
      </div>
    </div>
  );
}

export default Trophies;
