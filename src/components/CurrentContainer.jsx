import React from 'react';
import Current from './Current';

function CurrentContainer(props) {
  return <Current weather={props.weather} />
}

export default CurrentContainer;
