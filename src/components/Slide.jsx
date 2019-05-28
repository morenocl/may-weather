import React from "react";

import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";
import { types } from "../settings";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

function TabContent(props) {
    return (
        <div className="tabContent">
        {props.children}
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
        content = <CurrentContainer weather={props.data.weather}></CurrentContainer>;
    } else if (value === types.FORECAST) {
        content = <ForecastContainer weather={props.data.weather}></ForecastContainer>;
    } else if (value === types.UVI) {
        content = <div>UVI IN PROCESS</div>;
    }
    return (
        <Box>
            { props.data.loading && <LinearProgress /> }
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Tab label="Current"/>
                <Tab label="Forecast" />
                <Tab label="UVI" disabled />
            </Tabs>
            <TabContent className="tabContent">

                {content}
            </TabContent>
        </Box>
    
    );
}

export default Slide;
