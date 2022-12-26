import './App.css';
import * as React from 'react';
import ToggleItem from './components/toggleItem'
import { Grid } from '@mui/material';
import jsonData from './data/items.json';
import withRoot from './withRoot';


let aCollectedValue = 0;
const aCount = (item) => {
    if(item.austinCollected === true) {
      aCollectedValue = aCollectedValue + item.value; // if they do set a new property for your new object called info as the info from item 2 of this arrInfo array
    }}
;

let dCollectedValue = 0;
const dCount = (item) => {
    if(item.dylanCollected === true) {
      dCollectedValue = dCollectedValue + item.value; // if they do set a new property for your new object called info as the info from item 2 of this arrInfo array
    }}
;

// pass a function to map
jsonData[0].items.map(aCount);
jsonData[0].items.map(dCount);

function App() {  
  const [AclbrCounter, updateACounter] = React.useState(aCollectedValue);
  const [DclbrCounter, updateDCounter] = React.useState(dCollectedValue);
  
  return (
      <div>
        <Grid justifyContent="flex-start" flexWrap='wrap' xs={2} sm={4} md={8} lg={10} xl={12} padding={1} spacing={1} margin={0} container>
          <Grid xs={6} item>
            <h1>Austin</h1>
            <p>{AclbrCounter}</p>
          </Grid>
          <Grid xs={6} item>
            <h1>Dylan</h1>
            <p>{DclbrCounter}</p>
          </Grid>
        </Grid>
        {jsonData.map((log => (
          <div>
            <h1>{log.name}</h1>
            <Grid justifyContent="flex-start" flexWrap='wrap' xs={2} sm={4} md={8} lg={10} xl={12} padding={1} spacing={1} margin={0} container>
                {log.items.map((item => (
                  <ToggleItem 
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    image={item.image}
                    items={jsonData.values}
                    aEnabled={item.austinCollected}
                    dEnabled={item.dylanCollected}
                    ACounter={AclbrCounter}
                    updateACounter={updateACounter}
                    DCounter={DclbrCounter}
                    updateDCounter={updateDCounter}/>
                )))}
            </Grid>
          </div>
        )))}
      </div>
  );
}

export default withRoot(App);
