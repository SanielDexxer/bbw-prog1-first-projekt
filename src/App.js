import { useState } from 'react';
import './App.css';







const GameFrame = () => {
  const [pictureChange1, setPictureChange1] = useState(true);
  const [pictureChange2, setPictureChange2] = useState(true);
  const [pictureChange3, setPictureChange3] = useState(true);
  const [pictureChange4, setPictureChange4] = useState(true);
  const [pictureChange5, setPictureChange5] = useState(true);
  const [pictureChange6, setPictureChange6] = useState(true);
  const [pictureChange7, setPictureChange7] = useState(true);
  const [pictureChange8, setPictureChange8] = useState(true);
  const [pictureChange9, setPictureChange9] = useState(true);
  const [pictureChange10, setPictureChange10] = useState(true);
  const [pictureChange11, setPictureChange11] = useState(true);
  const [pictureChange12, setPictureChange12] = useState(true);
  const [pictureChange13, setPictureChange13] = useState(true);
  const [pictureChange14, setPictureChange14] = useState(true);
  const [pictureChange15, setPictureChange15] = useState(true);
  const [pictureChange16, setPictureChange16] = useState(true);

  const turnCard1 = () => {
    setPictureChange1((prevState) => !prevState);
  };
  const turnCard2 = () => {
    setPictureChange2((prevState) => !prevState);
  };
  const turnCard3 = () => {
    setPictureChange3((prevState) => !prevState);
  };
  const turnCard4 = () => {
    setPictureChange4((prevState) => !prevState);
  };
  const turnCard5 = () => {
    setPictureChange5((prevState) => !prevState);
  };
  const turnCard6 = () => {
    setPictureChange6((prevState) => !prevState);
  };
  const turnCard7 = () => {
    setPictureChange7((prevState) => !prevState);
  };
  const turnCard8 = () => {
    setPictureChange8((prevState) => !prevState);
  };
  const turnCard9 = () => {
    setPictureChange9((prevState) => !prevState);
  };
  const turnCard10 = () => {
    setPictureChange10((prevState) => !prevState);
  };
  const turnCard11 = () => {
    setPictureChange11((prevState) => !prevState);
  };
  const turnCard12 = () => {
    setPictureChange12((prevState) => !prevState);
  };
  const turnCard13 = () => {
    setPictureChange13((prevState) => !prevState);
  };
  const turnCard14 = () => {
    setPictureChange14((prevState) => !prevState);
  };
  const turnCard15 = () => {
    setPictureChange15((prevState) => !prevState);
  };
  const turnCard16 = () => {
    setPictureChange16((prevState) => !prevState);
  };



  return (
    <div id='grid-container'>
      <button onClick={turnCard1}>
          {pictureChange1 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card1'></div>
          }
      </button>
      <button onClick={turnCard2}>
          {pictureChange2 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card2'></div>
          }
      </button>
      <button onClick={turnCard3}>
          {pictureChange3 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card3'></div>
          }
      </button>
      <button onClick={turnCard4}>
          {pictureChange4 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card4'></div>
          }
      </button>
      <button onClick={turnCard5}>
          {pictureChange5 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card5'></div>
          }
      </button>
      <button onClick={turnCard6}>
          {pictureChange6 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card6'></div>
          }
      </button>
      <button onClick={turnCard7}>
          {pictureChange7 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card7'></div>
          }
      </button>
      <button onClick={turnCard8}>
          {pictureChange8 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card8'></div>
          }
      </button>
      <button onClick={turnCard9}>
          {pictureChange9 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card9'></div>
          }
      </button>
      <button onClick={turnCard10}>
          {pictureChange10 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card10'></div>
          }
      </button>
      <button onClick={turnCard11}>
          {pictureChange11 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card11'></div>
          }
      </button>
      <button onClick={turnCard12}>
          {pictureChange12 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card12'></div>
          }
      </button>
      <button onClick={turnCard13}>
          {pictureChange13 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card13'></div>
          }
      </button>
      <button onClick={turnCard14}>
          {pictureChange14 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card14'></div>
          }
      </button>
      <button onClick={turnCard15}>
          {pictureChange15 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card15'></div>
          }
      </button>
      <button onClick={turnCard16}>
          {pictureChange16 ? 
            <div className='cardHidden'></div>
            : 
            <div id='card16'></div>
          }
      </button>


      
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameFrame />
      </header>
    </div>
  );
}

export default App;