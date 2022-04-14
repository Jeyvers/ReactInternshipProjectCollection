import { useState } from 'react';
import './index.css';
import { allGiftCards } from './data';
import GiftCard from './GiftCard';

function App() {
  const [giftCards, setGiftCards] = useState(allGiftCards);
  console.log(giftCards);
  return (
    <>
      <header>
        <h2>{'Cards & Currencies'}</h2>
      </header>
      <div className=' container'>
        <div className='cards-list'>
          {giftCards.map((giftCard) => {
            return <GiftCard key={giftCard.id} {...giftCard} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
