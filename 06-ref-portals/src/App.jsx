import { useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {

  const [isPlayerNameProvided, setIsPlayerNameProvided] = useState(false);

  function updateIsPlayerNameProvided() {
    setIsPlayerNameProvided(true)
  }

  return (
    <>
      <Player showGames={updateIsPlayerNameProvided} />
      {isPlayerNameProvided &&
        <section>
          <div id="challenges">
            <TimerChallenge title="Easy" targetTime={1} />
            <TimerChallenge title="Not so Easy" targetTime={5} />
          </div>
          <div id="challenges">
            <TimerChallenge title="Getting tough" targetTime={10} />
            <TimerChallenge title="Pro only" targetTime={15} />
          </div>
        </section>
      }
      {!isPlayerNameProvided &&
        <div id="starter">
          <p>&#128520; Enter your name to start the games &#128520;</p>
        </div>
      }

    </>
  );
}

export default App;
