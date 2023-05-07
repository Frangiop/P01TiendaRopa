import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getOjos } from '../../store/ojos/actions';

import './OjosMultiComponent.css';

const OjosMultiComponent = () => {
  const dispatch = useDispatch();
  const { ojos, loadingOjos } = useSelector((state) => state.OjosReducer);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ojos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    dispatch(getOjos());
  }, []);

  return (
    <div className="carousel-container1">
      <div className="carousel-arrow1 carousel-arrow-left1" onClick={handlePrev}>
        &lt;
      </div>
      <div className="carousel-item1">
        <img className="carousel-img1" src={ojos[currentIndex]?.imagen} alt="" />
        <div className="carousel-caption">{ojos[currentIndex]?.nombre}</div>
      </div>
      <div className="carousel-arrow1 carousel-arrow-right1" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

OjosMultiComponent.propTypes = {};

OjosMultiComponent.defaultProps = {};

export default OjosMultiComponent;
