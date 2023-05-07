import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./DesplegableMultiComponent.css"
const DesplegableMultiComponent = () => {
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <div className="menu-desplegable">
      <button className="icono-menu" onClick={toggleOpciones}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {mostrarOpciones && (
        <div className="categorias-principales">
          <div className="categoria">
            <h3>Hombres</h3>
            <ul className="subcategorias">
              <li><Link to="/hombres/categoria1">Categoría 1</Link></li>
              <li><Link to="/hombres/categoria2">Categoría 2</Link></li>
              <li><Link to="/hombres/categoria3">Categoría 3</Link></li>
            </ul>
          </div>
          <div className="categoria">
            <h3>Mujeres</h3>
            <ul className="subcategorias">
              <li><Link to="/mujeres/categoria1">Categoría 1</Link></li>
              <li><Link to="/mujeres/categoria2">Categoría 2</Link></li>
              <li><Link to="/mujeres/categoria3">Categoría 3</Link></li>
            </ul>
          </div>
          <div className="categoria">
            <h3>Niños</h3>
            <ul className="subcategorias">
              <li><Link to="/niños/categoria1">Categoría 1</Link></li>
              <li><Link to="/niños/categoria2">Categoría 2</Link></li>
              <li><Link to="/niños/categoria3">Categoría 3</Link></li>
            </ul>
          </div>
          <div className="categoria">
            <h3>Complementos</h3>
            <ul className="subcategorias">
              <li><Link to="/complementos/categoria1">Categoría 1</Link></li>
              <li><Link to="/complementos/categoria2">Categoría 2</Link></li>
              <li><Link to="/complementos/categoria3">Categoría 3</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesplegableMultiComponent;
