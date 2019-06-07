import React from 'react';
import PropTypes from 'prop-types';
import Current from './Current';

function CurrentContainer(props) {
  const { weather } = props;
  return <Current weather={weather} />;
}

CurrentContainer.propTypes = {
  weather: PropTypes.arrayOf(Object).isRequired,
};

export default CurrentContainer;
