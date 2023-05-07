import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0); // 


  const totalSlides = 4; // Total number of slides in the carousel
  const slidesToShow = 3; // Number of slides to show at once
  const slidesToScroll = 1; // Number of slides to scroll at once


  // La función "nextSlide" se ejecuta cuando se hace clic en el botón "Siguiente". Si
   //el índice actual es menor que el número total de diapositivas menos el número de 
   //diapositivas que se muestran a la vez, se actualiza el estado de "slideIndex" aumentando el índice en 1.
  const nextSlide = () => {
    if (slideIndex < totalSlides - slidesToShow) {
      setSlideIndex(slideIndex + 1);
    }
  };

  //La función "prevSlide" se ejecuta cuando se hace clic en el botón "Anterior".
  // Si el índice actual es mayor que cero, se actualiza el estado de "slideIndex" disminuyendo el índice en 1.
  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };




  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevSlide} disabled={slideIndex === 0}>
        &#8249;
      </button>  { /* Este es un botón para mover el carrusel a la izquierda, y tiene algunas propiedades importantes: , El evento onClick está asignado a la función prevSlide, que se activará cuando se haga clic en el botón. Esta función es responsable de actualizar el índice del carrusel para que muestre el slide anterior. 
                 la propiedad disabled se establece en true cuando slideIndex es igual a 0, lo que significa que el botón está deshabilitado cuando se muestra el primer slide. Esto evita que el usuario continúe desplazándose hacia la izquierda cuando no hay más slides disponibles. El botón muestra la flecha hacia la izquierda "«" como contenido utilizando el código HTML &#8249;.  */ }
                  
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          style={{ transform: `translateX(-${slideIndex * (100 / slidesToShow)}%)` }}
          /*      El transform se utiliza para aplicar una transformación CSS al elemento, en este caso, para moverlo horizontalmente hacia la izquierda o la derecha.
             En este caso, la transformación se define como translateX(-${slideIndex * (100 / slidesToShow)}%), que es una función de plantilla de cadena. La expresión ${slideIndex * (100 / slidesToShow)}% calcula cuánto debe moverse el elemento, y se especifica como un porcentaje de la anchura total del carrusel.
             El valor de slideIndex representa el índice actual del slide, y el valor de slidesToShow es la cantidad de slides que se muestran a la vez en el carrusel.
             Entonces, a medida que se hace clic en los botones de navegación del carrusel para avanzar o retroceder en los slides, esta línea de código actualizará la posición del carrusel y desplazará horizontalmente los slides visibles.
            */

        >
          <div className="carousel-content">
            <Link to="/caras">Cara</Link>
          </div>
          <div className="carousel-content">
            <Link to="/labios">Labios</Link>
          </div>
          <div className="carousel-content">
            <Link to="/ojos">Ojos</Link>
          </div>
         
          <div className="carousel-content">
            <Link to="/maquillaje">Maquillaje</Link>
          </div>

          <div className="carousel-content margin">
            <Link to="/pestañas">Pestañas</Link>
          </div>
          <div></div>
          <div className="carousel-content">
            <Link to="/mas">Mas</Link>
          </div>
          <div className="carousel-content">
            <Link to="/brillos">Brillos</Link>
          </div>
        </div>
      </div>
      <button className="carousel-button" onClick={nextSlide} disabled={slideIndex === totalSlides - slidesToShow}>
        &#8250;
        {/* se utiliza para avanzar al siguiente slide en el carrusel. La propiedad disabled es una propiedad booleana que se utiliza para desactivar el botón cuando se alcanza el último slide del carrusel, lo que impide al usuario avanzar más. 
         La expresión slideIndex === totalSlides - slidesToShow evalúa si se ha llegado al último slide, y si es así, se establece la propiedad disabled en true, lo que desactiva el botón.
           El texto &#8250; es una entidad HTML que representa la flecha hacia la derecha */}
      </button>
    </div>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;


