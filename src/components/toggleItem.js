import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Paper, Typography } from '@mui/material';
import withRoot from '../withRoot';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

function ToggleItem(props) {
  // const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

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
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
          <ToggleButton value="d" aria-label="d">
            Dylan
          </ToggleButton>
          <ToggleButton value="a" aria-label="a">
            Austin
          </ToggleButton>
          </StyledToggleButtonGroup>
        </Grid>
      </Paper>
    </Grid>
        
  );
}

export default withRoot(ToggleItem)