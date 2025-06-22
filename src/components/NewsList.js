import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map(item => (
        <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
          <div className="card h-100 bg-dark text-white">
            <img 
              src={item.imageUrl.replace('800x400', '400x250')} 
              className="card-img-top" 
              alt={item.title} 
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.shortDescription}</p>
              <a 
                href={item.link} 
                className="btn btn-warning mt-auto" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Читати більше
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;