import React, { useState } from 'react';
import CardItem from './components/CardItem';

const database = [
  {
    id: 1,
    name: 'Нямушка',
    taste: 'с фуа-гра',
    descr: 'Сказочное заморское яство',
    info: 'Печень утки разварная с артишоками.',
    portions: '10',
    offer: 'мышь в подарок',
    weight: '0,5',
    units: 'кг',
    productUrl: '#',
    available: true,
    isSelected: false,
  },
  {
    id: 2,
    name: 'Нямушка',
    taste: 'с рыбой',
    descr: 'Сказочное заморское яство',
    info: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    portions: '40',
    offer: '2 мыши в подарок',
    weight: '2',
    units: 'кг',
    productUrl: '#',
    available: true,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Нямушка',
    taste: 'с курой',
    descr: 'Сказочное заморское яство',
    info: 'Филе из цыплят с трюфелями в бульоне.',
    portions: '100',
    offer: '5 мышей в подарок',
    offer2: 'заказчик доволен',
    weight: '5',
    units: 'кг',
    productUrl: '#',
    available: false,
    isSelected: false,
  },
];

function App() {
  const [products, setProducts] = useState(database);

  /*  */

  const handleSelected = id => {
    const productsCopy = [...products];
    const currentItem = productsCopy.find(item => item.id === id);
    currentItem.isSelected = !currentItem.isSelected;

    setProducts(productsCopy);
  };

  if (!products.length)
    return (
      <div>
        <p>Продукты не найдены</p>
      </div>
    );

  console.log(products);

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="wrapper">
            <section className="products">
              <h1 className="products__title">Ты сегодня покормил кота?</h1>
              <div className="products__list">
                {products.map(item => (
                  <CardItem
                    item={item}
                    key={item.id}
                    handleSelected={handleSelected}
                    disabled={!item.available}
                    selected={item.isSelected}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <svg
        width="320"
        height="480"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="visually-hidden"
      >
        <clipPath id="card-content">
          <mask id="path-1-inside-1_37_108" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z"
            fill="#D91667"
            mask="url(#path-1-inside-1_37_108)"
          />
        </clipPath>
      </svg>
    </div>
  );
}

export default App;
