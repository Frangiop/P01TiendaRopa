import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCaras } from '../../store/caras/actions';
import './CarasMultiComponent.css';

const CarasMultiComponent = () => { 
  // Dispatcher para ejecutar acciones
  const dispatch = useDispatch()
  // Las partes que nos interesan de la store que están en el reducer PostsReducer
  const {caras, loadingCaras} = useSelector((state) =>state.CarasReducer)
 
  // Cuando arranca el componente 
  useEffect(()=> {
    // Llamar a la acción para que obtenga las caras
     dispatch(getCaras())
  },[])
 
  return (
    <div className="caras-container">
      {caras.map(cara => (
        <div className="cara-item" key={cara.id}>
          <img className="cara-imagen" src={cara.imagen} alt={cara.imagen} />
          <div className="cara-nombre">{cara.nombre}</div>
        </div>
      ))}
    </div>
  );
}

CarasMultiComponent.propTypes = {};

CarasMultiComponent.defaultProps = {};

export default CarasMultiComponent;
