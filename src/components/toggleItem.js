import * as React from 'react';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import { Paper, Typography } from '@mui/material';
import withRoot from '../withRoot';
// import { Octokit } from '@octokit/core';


// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'TOKEN HERE'
// })

// const file_sha = await getFileShaIfExists(octokit, owner, repo, path);

// await octokit.request('PUT /repos/Ctorbot/CLBR/contents/main/src/data/items.json', {
//   owner: 'OWNER',
//   repo: 'CLBR',
//   path: 'PATH',
//   message: 'New Collection Log Slot',
//   committer: {
//     name: 'CLBR',
//     email: 'jordandylan52@gmail.com'
//   },
//   content: 'bXkgdXBkYXRlZCBmaWxlIGNvbnRlbnRz',
//   sha: file_sha
// })

function ToggleItem(props) {
  const [aEnabled, setAEnabled] = React.useState(props.aEnabled);
  const [dEnabled, setDEnabled] = React.useState(props.dEnabled);
  
  const handleAEnabled = (prevState) => {
    if (process.env.PAT === undefined){
      console.log("Well it is undefined")
    }
    setAEnabled(!prevState);
    if (prevState === false){
      props.updateACounter(props.ACounter + props.value)
    }
    else{
      props.updateACounter(props.ACounter - props.value)
    }
  };
  const handleDEnabled = (prevState) => {
    setDEnabled(!prevState);
    if (prevState === false){
      props.updateDCounter(props.DCounter + props.value)
    }
    else{
      props.updateDCounter(props.DCounter - props.value)
    }
  };

  return (
    <Grid
      className={props.name}
      elevation={0}
      justifyContent='flex-start'
      flexWrap='wrap'
      item
    >
      <Paper>
        <Typography xs={12} width={150} height={50} align='center'>{props.name}</Typography>
        <Grid xs={12} align='center' width={150} height={50} item>
            <img src={props.image} className={props.name} alt={props.name} />
        </Grid>
        <Grid xs={12} align='center' item>
          <ToggleButton
            value="Austin"
            selected={aEnabled}
            onChange={() => {
              handleAEnabled(aEnabled);
            }}
          >
            Austin
          </ToggleButton>
          <ToggleButton
            value={dEnabled}
            selected={dEnabled}
            onChange={() => {
              handleDEnabled(dEnabled);
            }}
          >
            Dylan
          </ToggleButton>
        </Grid>
      </Paper>
    </Grid>
        
  );
}

export default withRoot(ToggleItem)