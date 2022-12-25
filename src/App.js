import './App.css';
import * as React from 'react';
import ToggleItem from './components/toggleItem'
import { Grid } from '@mui/material';
import jsonData from './data/items.json';
import withRoot from './withRoot';



function App() {  
  const [AclbrCounter, updateACounter] = React.useState(0);
  const [DclbrCounter, updateDCounter] = React.useState(0);
  
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
