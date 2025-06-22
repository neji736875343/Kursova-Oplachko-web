import React from 'react';

const ContactsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h1 className="text-primary">Контакти GameZone</h1>
          <p className="lead">Ваш гайд у світі комп’ютерних ігор</p>
          <hr className="bg-primary"/>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>Адреса штаб-квартири:</strong> вул. Геймерська, 10, Київ, Україна, 02000
            </li>
            <li className="mb-2">
              <strong>Підтримка:</strong> (044) 123-45-67
            </li>
            <li className="mb-2">
              <strong>Email:</strong> <a href="mailto:support@gamezone.com">support@gamezone.com</a>
            </li>
            <li className="mb-2">
              <strong>Веб-сайт:</strong> <a href="https://gamezone.com" target="_blank" rel="noopener noreferrer">gamezone.com</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-7">
          <div className="shadow-lg" style={{borderRadius: '8px', overflow: 'hidden', border: '2px solid #ff4500'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.123456!2d30.523400!3d50.450100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2z0JrQsNCy0ZbQstC10YDQvNCw0YHQutC40YHRgtC-0LLRgdC60LDRjyDQvtGC0LXRiNGP0L3QuNGC0LXRgNGB0YzQutC-0LLRgdC60LDRjyDQvtCy0LXRgNCw0YLRgNC10L3QtdC90L3Ri9C5INC30LDRgdGC0LXRgNGB0YLRjA!5e0!3m2!1suk!2sua!4v1687654321!5m2!1suk!2sua"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Розташування GameZone"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;