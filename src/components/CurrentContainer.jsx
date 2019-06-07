import React from 'react';
import Current from './Current';

function CurrentContainer(props) {
  const { weather } = props;
  return <Current weather={weather} />;
}

export default CurrentContainer;
