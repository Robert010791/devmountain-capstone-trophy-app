import React from 'react';
import Trophies from './Trophies';

function TrophiesList({
  trophies,
  completeTrophy,
  updateUserTrophies,
  isUserLoggedIn,
}) {
  return (
    <div>
      {trophies.map((item, index) => {
        return (
          <Trophies
            updateUserTrophies={updateUserTrophies}
            completeTrophy={completeTrophy}
            isUserLoggedIn={isUserLoggedIn}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default TrophiesList;
