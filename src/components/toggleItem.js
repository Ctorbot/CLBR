import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import AbyssalOrphan from '../imgs/Abyssal_orphan.png'

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

export default function ToggleItem(props) {
  // const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
      }}
    >
      <Typography align='center' sx={{ width: 1 }} item >{props.name}</Typography>
      <img align='center' sx={{ width: 1 }} src={AbyssalOrphan} className={props.name} alt={props.name} />
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
    </Paper>
  );
}