import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import './FooterComponent.css';

const FooterComponent = () => { 
  return (
    <div className="footer">
      <div className="footer-icon-text">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Contactanos: </span> 
        contacto@gmail.cero
      </div>
      <div className="footer-icon-text">
        <FontAwesomeIcon icon={faPhone} />
        <span>Teléfono: </span>
        +444556677 
      </div>
      <div className="footer-icon-text">
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram: </span>
        Danos Tu opinión 
      </div>
      <div className="footer-text">Marca registrada</div>
    </div>
  )
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
