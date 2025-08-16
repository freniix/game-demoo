import Player from './components/Player.jsx';
import TimeChallange from './components/TimeChallange.jsx';
function App() {
  return (
    <>
      <Player />

      <div id="challenges">
        <TimeChallange time={1} title={"Easy"}/>
        <TimeChallange time={5} title={"Medium"}/>
        <TimeChallange time={10} title={"Hard"}/>
        <TimeChallange time={15} title={"Only Pros"}/>
      </div>
    </>
  );
}

export default App;
