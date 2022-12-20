import './App.css';
import * as React from 'react';
import ToggleItem from './components/toggleItem'
import { Grid } from '@mui/material';
import jsonData from './data/items.json';
import withRoot from './withRoot';

function App() {
  return (
      <div>
        {jsonData.map((log => (
          <div>
            <h1>{log.name}</h1>
            <Grid justifyContent="flex-start" flexWrap='wrap' xs={2} sm={4} md={8} lg={10} xl={12} padding={1} spacing={1} margin={0} container>
                {log.items.map((item => (
                  <ToggleItem key={item.name} name={item.name} image={item.image}/>
                )))}
            </Grid>
          </div>
        )))}
      </div>
  );
}

export default withRoot(App);
