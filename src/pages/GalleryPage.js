import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';

import galleryImg1 from '../assets/images/drakon.jpg';
import galleryImg2 from '../assets/images/kosmos.jpg';
import galleryImg3 from '../assets/images/car.png';
import galleryImg4 from '../assets/images/gallery5.jpg';
import galleryImg5 from '../assets/images/apokal.png';
import galleryImg6 from '../assets/images/war.png';

const galleryImages = [
  { id: 1, src: galleryImg1, prompt: "Епічна битва в RPG, лицар проти дракона, деталізований ландшафт" },
  { id: 2, src: galleryImg2, prompt: "Космічний корабель у відкритому космосі, стиль sci-fi, неонове підсвічування" },
  { id: 3, src: galleryImg3, prompt: "Фотореалістичний кадр з гонки, швидкісна машина на трасі" },
  { id: 4, src: galleryImg4, prompt: "Фентезі місто, магічні вежі, нічна атмосфера" },
  { id: 5, src: galleryImg5, prompt: "Постапокаліптичний пейзаж, руїни з виживальницькою базою" },
  { id: 6, src: galleryImg6, prompt: "Мультиплеєрна битва, солдати в окопах, дим і вибухи" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Галерея геймерських кадрів</h1>
      <p className="lead text-center mb-5">Найкращі скриншоти та арти з улюблених ігор.</p>
      
      <div className="alert alert-dark text-center" role="alert">
        <h4 className="alert-heading">Створи свій унікальний кадр!</h4>
        <p>Спробуй створити власні геймерські зображення на цих платформах:</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.artstation.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">ArtStation</a>
          <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">DeviantArt</a>
          <a href="https://www.nvidia.com/en-us/geforce/bundles/canvas/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">NVIDIA Canvas</a>
        </div>
      </div>

      <hr className="my-5 bg-secondary" />

      <div className="row">
        {galleryImages.map(image => (
          <div className="col-lg-4 col-md-6 mb-4" key={image.id}>
            <div className="card h-100 shadow-sm" onClick={() => setSelectedImage(image)} style={{ cursor: 'pointer', border: '2px solid #ff4500' }}>
              <img src={image.src} className="card-img-top" style={{height: '250px', objectFit: 'cover'}} alt={image.prompt} />
              <div className="card-body bg-dark text-white">
                <p className="card-text fst-italic"><strong>Опис:</strong> "{image.prompt}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-backdrop show">
          <div className="modal-content-wrapper bg-dark text-white">
            <button className="modal-close-btn text-warning" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.prompt} className="modal-image" />
            <div className="modal-caption text-warning">
              <strong>Опис:</strong> "{selectedImage.prompt}"
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;