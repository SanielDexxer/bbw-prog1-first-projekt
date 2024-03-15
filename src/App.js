import { useEffect, useState, useCallback } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ id, isHidden, isMatched, onClick, imageUrl }) => {
  const handleClick = () => {
    onClick(id);
  };

  const cardStyle = isMatched
    ? {}
    : { backgroundImage: `url(${isHidden ? 'Media/questionmark-memory.png' : imageUrl})` };

  const cardClass = `card ${isMatched ? 'matched' : ''}`;

  return (
    <div className={cardClass} onClick={handleClick} style={cardStyle}>
    </div>
  );
};

const GameFrame = () => {
  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const initializeGame = useCallback(() => { 
    const imageURLs = [
      'Media/pic1.jpg', 'Media/pic2.jpg', 'Media/pic3.jpg', 'Media/pic4.jpg',
      'Media/pic5.jpg', 'Media/pic6.jpg', 'Media/pic7.jpg', 'Media/pic8.jpg',
    ];

    const cardPairs = imageURLs.flatMap((image, index) => ([{ id: index * 2, image }, { id: index * 2 + 1, image }]));

    const shuffledCards = shuffleArray(cardPairs);
    setCards(shuffledCards);
    setOpenCards([]);
    setMatchedPairs([]);
  }, []); 

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (openCards.length < 2 && !openCards.includes(id) && !matchedPairs.includes(cards.find(card => card.id === id).image)) {
      const newOpenCards = [...openCards, id];
      setOpenCards(newOpenCards);

      if (newOpenCards.length === 2) {
        const firstCard = cards.find(card => card.id === newOpenCards[0]);
        const secondCard = cards.find(card => card.id === newOpenCards[1]);

        if (firstCard.image === secondCard.image) {
          setMatchedPairs((prev) => [...prev, firstCard.image]); 
          setOpenCards([]);
        } else {
          setTimeout(() => {
            setOpenCards([]);
          }, 1000);
        }
      }
    }
  };

  const renderCard = (card, index) => {
    const isHidden = !openCards.includes(card.id);
    const isMatched = matchedPairs.includes(card.image);
    return <Card key={index} id={card.id} isHidden={isHidden} isMatched={isMatched} onClick={handleCardClick} imageUrl={card.image} />;
  };

  return (
    <div>
      <div id='gridContainer'>
        {cards.map(renderCard)}
      </div>
      <button onClick={initializeGame}>Reset Game</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header>
        <div className='d-md-flex justify-content-md-center'>
          <GameFrame />
        </div>
      </header>
    </div>
  );
};

export default App;
