import React from 'react';

const CardItem = ({
  item,
  i,
  handleSelected,

  disabled,
  selected,
  packageRef,
}) => {
  console.log(selected);

  return (
    <div
      className={
        selected ? 'card__wrapper card__wrapper--selected' : 'card__wrapper'
      }
      ref={elem => (packageRef.current[i] = elem)}
    >
      <a
        className={disabled ? 'card__link card__link--disabled' : 'card__link'}
        id={item.id}
        onClick={e => handleSelected(e)}
      >
        <div className="card">
          <div className="card__inner">
            <div className="card__top">
              <h6
                className={
                  selected
                    ? 'card__subtitle card__subtitle--selected'
                    : 'card__subtitle'
                }
              >
                {item.descr}
              </h6>
              <h2 className="card__title">
                <span>{item.name}</span>
                {item.taste}
              </h2>
              <p className="card__portions">
                <span>{item.portions}</span> порций
              </p>
              <span className="card__offer">{item.offer}</span>
              {item.offer2 ? (
                <span className="card__offer">{item.offer2}</span>
              ) : (
                ''
              )}
            </div>
            <div className="card__weight-block">
              <div className="card__weight-circle">
                <div className="card__weight">
                  <span className="card__weight-number">{item.weight}</span>
                  <span className="card__weight-units">{item.units}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="card__bottom-block">
        {!disabled ? (
          <p className="card__bottom-text">
            Чего сидишь? Порадуй котэ,&nbsp;
            <a
              className="card__bottom-link"
              onClick={() => handleSelected(item.id)}
            >
              купи.
            </a>
          </p>
        ) : (
          <p className="card__bottom-text card__bottom-text--disabled">
            {`Печалька, ${item.taste} закончился.`}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
