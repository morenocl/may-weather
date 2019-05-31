import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CurrentContainer from './CurrentContainer';
import ForecastContainer from './ForecastContainer';
import { types } from '../settings';

function TabContent({children}) {
  return (
    <div className="tabContent">
      {children}
    </div>
  );
}

function Slide(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  let content;
  if (value === types.CURRENT) {
    content = (
      <CurrentContainer
        loading={props.data.loading}
        weather={props.data.weather}
      />
    );
  } else if (value === types.FORECAST) {
    content = <ForecastContainer forecast={props.data.forecast} />;
  } else if (value === types.UVI) {
    content = <div>UVI IN PROCESS</div>;
  }
  return (
    <Box>
      { props.data.loading && <LinearProgress /> }
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab clasName="tab" label="Current" />
        <Tab clasName="tab" label="Forecast" />
        <Tab clasName="tab" label="UVI" disabled />
      </Tabs>
      <TabContent className="tabContent">
        {content}
      </TabContent>
    </Box>
  );
}

export default Slide;
