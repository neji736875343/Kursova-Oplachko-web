import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/images/logo192.png'; // Оновлено шлях до логотипу

const Header = () => {
  return (
    <header className="shadow-sm sticky-top bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container">
          <Link className="navbar-brand fs-3 d-flex align-items-center text-warning" to="/">
            <img src={logoImage} alt="GameZone Logo" width="50" height="50" className="d-inline-block align-top me-2" />
            GameZone
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item mx-1">
                <NavLink className="nav-link text-warning" to="/" end>Головна</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link text-warning" to="/about">Про сайт</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link text-warning" to="/gallery">Галерея</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link text-warning" to="/news">Новини</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link text-warning" to="/contacts">Контакти</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;