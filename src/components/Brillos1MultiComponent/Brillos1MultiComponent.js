import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getBrillos } from '../../store/brillos/action';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Brillos1MultiComponent.css'; // Importar archivo CSS


const Brillos1MultiComponent = () => { 
  const dispatch = useDispatch();
  const {brillos, loadingBrillos} = useSelector((state) =>state.BrillosReducer);

  useEffect(() => {
    dispatch(getBrillos());
  }, []);

  return (
    <div className="container">
      {brillos.map(brillo => (
        <div key={brillo.id} className="brillo">
          <Link to={`/brillo/${brillo.id}`} className="brillo-link">
            <img src={brillo.imagen} alt={brillo.nombre} className="brillo-imagen" />
            <div className="brillo-nombre">{brillo.nombre}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

Brillos1MultiComponent.propTypes = {};

Brillos1MultiComponent.defaultProps = {};

export default Brillos1MultiComponent;
