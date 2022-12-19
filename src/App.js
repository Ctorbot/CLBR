import './App.css';
import * as React from 'react';
import ToggleItem from './components/toggleItem'
import { Grid } from '@mui/material';
import jsonData from './data/items.json';

function App() {
  return (
    <div>
      {/* <Paper style={styles.paperContainer} square/> */}
      <Grid container justifyContent="flex-start" alignItems="center" padding={2} spacing={2} columns={{ xs: 2, sm: 4, md: 8, lg: 10, xl: 12 }}>
        {jsonData.map((log => (
          <Grid >
            <h1 xs={2} sm={4} md={8} lg={10} xl={12} item>{log.name}</h1>
            <Grid container padding={2} spacing={2} columns={{ xs: 2, sm: 4, md: 8, lg: 10, xl: 12 }}>
                {log.items.map((item => (
                  <Grid xs={1} sm={1} md={1} item>
                    <ToggleItem name={item.name}/>
                  </Grid>
                )))}
            </Grid>
          </Grid>
        )))}
      </Grid>
    </div>
  );
}

export default App;
