import React, { useState } from 'react';

const GiftCard = ({ id, title, currencies }) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className='card'>
      <h1 className='card-title'>{title}</h1>
      <h4>Exchange Currencies: </h4>
      <div className='card-currencies'>
        {(viewMore ? currencies : currencies.slice(0, 6)).map(
          (currency, index) => (
            <span key={index} className='currency'>
              {currency}
            </span>
          )
        )}
      </div>
      <p onClick={() => setViewMore(!viewMore)}>
        {viewMore ? 'View Less Currencies <' : 'View All Currencies >'}
      </p>
    </div>
  );
};

export default GiftCard;
