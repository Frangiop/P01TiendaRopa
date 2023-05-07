import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMaquillajes } from '../../store/maquillaje/actions';

import './MaquillajeMultiComponent.css';

const MaquillajeMultiComponent = () => {
  const dispatch = useDispatch();
  const { maquillajes, loadingMaquillajes } = useSelector(  (state) => state.MaquillajesReducer );

  useEffect(() => {
    dispatch(getMaquillajes());
  }, []);

  return (
    <div className="multi-component-container">
      <div className="multi-component-row">
        {maquillajes.slice(0, 3).map((maquillaje) => (
          <div key={maquillaje.id} className="image-container">
            <img className="multi-component-image" src={maquillaje.imagen} alt="" />
            <div className="image-description">{maquillaje.nombre}</div>
          </div>
        ))}
      </div>
      <div className="multi-component-row">
        {maquillajes.slice(3, 6).map((maquillaje) => (
          <div key={maquillaje.id} className="image-container">
            <img className="multi-component-image" src={maquillaje.imagen} alt="" />
            <div className="image-description">{maquillaje.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MaquillajeMultiComponent.propTypes = {};

MaquillajeMultiComponent.defaultProps = {};

export default MaquillajeMultiComponent;
