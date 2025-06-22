import React from 'react';
import { Link } from 'react-router-dom';
import { Controller, Images, Trophy, Gear } from 'react-bootstrap-icons';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Про наш портал "GameZone"</h1>
          <p className="lead mt-3">
            Дізнавайтеся все про світ комп’ютерних ігор, гарячі новинки та захопливі історії!
          </p>
          <p className="text-muted">Цей проєкт створено як курсову роботу з дисципліни «Веб-програмування та веб-дизайн».</p>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4 text-primary">Що ви знайдете на нашому порталі?</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/news" className="text-decoration-none text-light">
              <div className="card h-100 text-center card-hover bg-secondary text-white">
                <div className="card-body">
                  <Controller size={48} className="text-warning mb-3" />
                  <h5 className="card-title">Гарячі новини ігор</h5>
                  <p className="card-text">Останні оновлення, релізи та огляди найпопулярніших комп’ютерних ігор.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/gallery" className="text-decoration-none text-light">
              <div className="card h-100 text-center card-hover bg-secondary text-white">
                <div className="card-body">
                  <Images size={48} className="text-warning mb-3" />
                  <h5 className="card-title">Галерея геймерських кадрів</h5>
                  <p className="card-text">Найкращі скриншоти та арти з улюблених ігор.</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 text-center bg-secondary text-white">
              <div className="card-body">
                <Gear size={48} className="text-warning mb-3" />
                <h5 className="card-title">Поради для геймерів</h5>
                <p className="card-text">Дізнайтеся секрети та хитрощі для покращення ваших навичок.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-5 mb-4 text-primary">Для кого цей сайт?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-white">
              <div className="card-body d-flex align-items-center">
                <Trophy size={40} className="text-success me-3 flex-shrink-0" />
                <div>
                  <h5 className="card-title mb-1">Гравців-ентузіастів</h5>
                  <p className="card-text small">Які шукають свіжі ігри та змагання.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-white">
              <div className="card-body d-flex align-items-center">
                <Controller size={40} className="text-info me-3 flex-shrink-0" />
                <div>
                  <h5 className="card-title mb-1">Розробників ігор</h5>
                  <p className="card-text small">Які цікавляться новими технологіями в геймінгу.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-white">
              <div className="card-body d-flex align-items-center">
                <Gear size={40} className="text-warning me-3 flex-shrink-0" />
                <div>
                  <h5 className="card-title mb-1">Любителів технологій</h5>
                  <p className="card-text small">Які хочуть зрозуміти світ геймінгу.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;