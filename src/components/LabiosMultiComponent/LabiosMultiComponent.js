import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLabios } from '../../store/labios/actions';
import { Link } from 'react-router-dom';
import './LabiosMultiComponent.css'; // Importar el archivo CSS

const LabiosMultiComponent = () => { 
  const dispatch = useDispatch()
  const {labios, loadingLabios} = useSelector((state) =>state.LabiosReducer)
  
  useEffect(() => {
    dispatch(getLabios())
  }, [])

  return (
    <div className="labios-container"> {/* Aplicar la clase del contenedor */}
      {labios.map(labio => (
        <div key={labio.id} className="labio-container"> {/* Aplicar la clase de cada labio */}
          <Link to={`/labio/${labio.id}`}>
            <img src={labio.imagen} alt={labio.nombre} className="labio-image" /> {/* Aplicar la clase de la imagen */}
          </Link>
          <div className="labio-name">{labio.nombre}</div> {/* Aplicar la clase del nombre */}
        </div>
      ))}
    </div>
  );
}

export default LabiosMultiComponent;
