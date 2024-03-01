import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';







const GameFrame = () => {
  const [cardStates, setCardStates] = useState(Array(16).fill(true));



  const turnCard = (e) => {
    setCardStates((previousStates) => {
      const newStates = [...previousStates]
      newStates[e] = !previousStates[e]
      return newStates;
    })
  };

  const renderCard = (e) => {
    return (
      <button key={e} onClick={() => turnCard(e)}>
        {cardStates[e] ?
          <div className='cardHidden'></div>
          :
          <div id={'card${e + 1}'}></div>
        }
      </button>
    )
  }



  return <div id='gridContainer'>{cardStates.map((_, e) => renderCard(e))}</div>
};

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <GameFrame />
      </header>
    </div>
  );
}

export default App;