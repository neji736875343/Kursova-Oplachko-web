import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import { getFeaturedNews } from '../api/mockApi';
import { Controller, Trophy, Gear } from 'react-bootstrap-icons';
import gameIllustration from '../assets/images/game-illustration.jpg';

const HomePage = () => {
  const [sliderNews, setSliderNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedNews().then(data => {
      setSliderNews(data.slice(0, 3));
      setLatestNews(data.slice(0, 6)); 
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Завантаження...</div>;
  }

  return (
    <div>
      <Slider news={sliderNews} />
      
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col">
            <h1 className="text-warning">Ласкаво просимо на портал "GameZone"</h1>
            <p className="lead">Ваше джерело свіжих новин про комп’ютерні ігри.</p>
          </div>
        </div>
        
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <h2>Що таке світ ігор?</h2>
            <p>Світ комп’ютерних ігор — це захоплююча галузь, де технології та творчість об’єднуються для створення унікальних ігрових світів. Від динамічних шутерів до стратегій — тут кожен знайде щось для себе.</p>
          </div>
          <div className="col-md-6">
            <img src={gameIllustration} className="img-fluid rounded" alt="Game illustration"/>
          </div>
        </div>
        

        <div className="row mt-5">
            <h2 className="text-center mb-4 text-warning">Основні жанри ігор</h2>
            <div className="col-md-4 mb-4">
              <a href="https://www.ign.com/articles/the-best-action-games-of-all-time" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                <div className="card h-100 card-hover text-center bg-dark text-white">
                    <div className="card-body">
                        <Controller size={40} className="text-danger mb-3" />
                        <h5 className="card-title">Екшен</h5>
                        <p className="card-text">Динамічні ігри з боями та пригодами, де рефлекси вирішують усе.</p>
                    </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="https://www.pcgamer.com/best-strategy-games/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                <div className="card h-100 card-hover text-center bg-dark text-white">
                    <div className="card-body">
                        <Trophy size={40} className="text-danger mb-3" />
                        <h5 className="card-title">Стратегії</h5>
                        <p className="card-text">Ігри, де перемога залежить від тактики та планування.</p>
                    </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="https://www.gamesradar.com/best-rpg-games/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                <div className="card h-100 card-hover text-center bg-dark text-white">
                    <div className="card-body">
                        <Gear size={40} className="text-danger mb-3" />
                        <h5 className="card-title">RPG</h5>
                        <p className="card-text">Рольові ігри з глибоким сюжетом та розвитком персонажів.</p>
                    </div>
                </div>
              </a>
            </div>
        </div>
        <hr className="my-5 bg-secondary" />
        <div className="row">
          <h2 className="text-center mb-4 text-warning">Останні новини</h2>
          {latestNews.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
              <div className="card h-100 bg-dark text-white">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.shortDescription}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning mt-auto">
                    Читати на джерелі
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-4">
          <div className="col text-center">
            <Link to="/news" className="btn btn-warning btn-lg">
              Переглянути всі новини
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;