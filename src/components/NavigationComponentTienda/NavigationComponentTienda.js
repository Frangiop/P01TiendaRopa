import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
import Slider from "react-slick";
import "./NavigationComponentTienda.css"
import CarouselLinks from '../CarouselMultiComponent/CarouselMultiComponent';
import DesplegableMultiComponent from '../DesplegableMultiComponent/DesplegableMultiComponent';
import FooterComponent from '../FooterComponent/FooterComponent';



const NavigationComponentTienda = () => { 

return ( 
<div>
<CarouselLinks></CarouselLinks>
<DesplegableMultiComponent></DesplegableMultiComponent>
<FooterComponent></FooterComponent>
{/*<div>
<Link to='/caras'>Cara</Link>  
<Link to='/labios'>Labios</Link>
<Link to='/ojos'>Ojos</Link>
<Link to='/uñas'>Uñas</Link>
</div>*/} 

  </div>
)
 };

NavigationComponentTienda.propTypes = {};

NavigationComponentTienda.defaultProps = {};

export default NavigationComponentTienda;
