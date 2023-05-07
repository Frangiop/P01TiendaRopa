import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './SingleLabiosComponent.css'; // importar el archivo CSS


const SingleLabiosComponent = () => { 
  const {labio,loadingLabios} = useSelector((state) =>state.LabiosReducer)

  return ( 
    <div className="single-labios-container">
      <div className="single-labios-image">
        <img className="labio-image1" src={labio.imagen} alt="" />
      </div>
      <div className="single-labios-details">
        <div className="single-labios-name">{labio.nombre}</div>
        <div className="single-labios-price">{labio.precio}</div>
      </div>
    </div>
  );
};

SingleLabiosComponent.propTypes = {};

SingleLabiosComponent.defaultProps = {};

export default SingleLabiosComponent;
