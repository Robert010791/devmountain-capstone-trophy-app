import React from 'react';
import { useState } from 'react';

function Trophies({
  item,
  completeTrophy,
  updateUserTrophies,
  isUserLoggedIn,
}) {
  return (
    // <div
    //   className={
    //     !item.completed ? 'incomplete-trophy-card' : 'completed-trophy-card'
    //   }
    // >
    <div
      style={
        !item.completed
          ? { border: 'solid 4px black' }
          : { border: 'solid 4px gold' }
      }
      className={
        item.trophyid % 2 === 0
          ? 'card-one trophy-card'
          : 'card-two trophy-card'
      }
    >
      <div className="trophy-text">
        <img src={item.gameimg} alt="" className="card-img img-1" />
        <h3 className="trophy-title">{item.title}</h3>
        <p className="trophy-description">{item.description}</p>
      </div>

      <div className="trophy-direction ">
        <p className="direction-text">
          <h4>Requirements-</h4> {item.direction}
        </p>

        <div className="trophy-btn-img">
          <img className="trophy-img " src={item.trophyimg} />
          <button
            className="completed-btn"
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
            {!item.completed ? 'Mark complete' : 'Mark incomplete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trophies;
