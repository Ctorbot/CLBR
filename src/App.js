import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ToggleItem from './components/toggleItem'
import { Typography, Grid, Paper, Card, Chip } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>
    //       <p>Abyssal Pet</p>
    //       <ToggleItem />
    //     </div>
    //   </header>
    // </div>
    
    <div>
    {/* <Paper style={styles.paperContainer} square/> */}
    <Grid container justifyContent="flex-start" alignItems="center" padding={2} spacing={2} columns={{ xs: 2, sm: 4, md: 8, lg: 10, xl: 12 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((itemName) => (
            <Grid xs={1} sm={1} md={1} item>
                <ToggleItem />
                {/* <Card key={itemName} sx={{ minWidth: "stretch", height: 200 }}>
                  <ToggleItem />
                </Card> */}
            </Grid>
            ))}
    </Grid>
    </div>
  );
}

export default App;
