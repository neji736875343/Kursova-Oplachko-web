import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({ news }) => {
  const sliderItems = news.slice(0, 3);

  return (
    <Carousel>
      {sliderItems.map(item => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.imageUrl}
            alt={item.title}
            style={{ maxHeight: '400px', objectFit: 'cover', filter: 'brightness(0.9)' }} // Додано затемнення для контрасту
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded text-warning">
            <h3>{item.title}</h3>
            <p>{item.shortDescription}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;