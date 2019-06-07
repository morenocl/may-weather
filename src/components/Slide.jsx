import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ContentLoader from 'react-content-loader';
import CurrentContainer from './CurrentContainer';
import ForecastContainer from './ForecastContainer';
import { types } from '../settings';

function TabContent({ children }) {
  return (
    <div className="tabContent">
      {children}
    </div>
  );
}

const Loader = () => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
    <rect x="70" y="35" rx="3" ry="3" width="85" height="6" />
    <rect x="0" y="80" rx="3" ry="3" width="350" height="6" />
    <rect x="115" y="289" rx="3" ry="3" width="380" height="6" />
    <rect x="134" y="296" rx="3" ry="3" width="201" height="6" />
    <circle cx="30" cy="30" r="30" />
  </ContentLoader>
);

function Slide(props) {
  const [value, setValue] = React.useState(0);
  const { loading, weather, forecast } = props;
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  let content;
  if (loading) {
    content = <Loader />;
  } else if (value === types.CURRENT) {
    content = (
      <CurrentContainer
        loading={loading}
        weather={weather}
      />
    );
  } else if (value === types.FORECAST) {
    content = <ForecastContainer forecast={forecast} />;
  } else if (value === types.UVI) {
    content = <div>UVI IN PROCESS</div>;
  }
  return (
    <Box>
      { loading && <LinearProgress /> }
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab className="tab" label="Current" />
        <Tab className="tab" label="Forecast" />
        <Tab className="tab" label="UVI" disabled />
      </Tabs>
      <TabContent className="tabContent">
        {content}
      </TabContent>
    </Box>
  );
}

export default Slide;
