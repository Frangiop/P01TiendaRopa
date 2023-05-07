import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './SingleBrillosComponent.css';

const SingleBrillosComponent = () => { 

  const {brillo,loadingBrillos} = useSelector((state) =>state.BrillosReducer)

  return ( 
    <div className="container">
      <div className="nombre">
        {brillo.nombre}
      </div>
      <div className="precio-container">
        Precio: ${brillo.precio}
      </div>
      <div className="descripcion">
        {brillo.descripcion}
      </div>
    </div>
  );
};

SingleBrillosComponent.propTypes = {};

SingleBrillosComponent.defaultProps = {};

export default SingleBrillosComponent;
