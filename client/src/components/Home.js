import React from 'react';

import TrophiesList from './TrophiesList';

function Home({
  completeTrophy,
  trophies,
  updateUserTrophies,
  isUserLoggedIn,
}) {
  return (
    <div>
      <div className="body-container">
        <TrophiesList
          completeTrophy={completeTrophy}
          trophies={trophies}
          updateUserTrophies={updateUserTrophies}
          isUserLoggedIn={isUserLoggedIn}
        />
      </div>
    </div>
  );
}

export default Home;
