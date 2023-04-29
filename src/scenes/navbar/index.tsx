import {useState} from 'react';
import {Link} from 'react-router-dom';
import SavingsIcon from '@mui/icons-material/Savings';
import {Box, Typography, useTheme} from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

type Props = {};

const Navbar = (props: Props) => {
  // grab palette object from useTheme
  const {palette} = useTheme();

  // set selected page
  const [selected, setSelected] = useState('dashboard');

  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      {/* left side */}
      <FlexBetween gap='0.75rem'>
        <SavingsIcon sx={{fontSize: '28px'}} />
        <Typography variant='h4' fontSize='16px'>
          MoneyMind
        </Typography>
      </FlexBetween>

      {/* right side */}
      <FlexBetween gap='2rem'>
        <Box sx={{'&:hover': {color: palette.primary[100]}}}>
          <Link
            to='/'
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : 'palette.grey[700]',
              textDecoration: 'inherit',
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{'&:hover': {color: palette.primary[100]}}}>
          <Link
            to='/predictions'
            onClick={() => setSelected('predictions')}
            style={{
              color: selected === 'predictions' ? 'inherit' : 'palette.grey[700]',
              textDecoration: 'inherit',
            }}
          >
            Predictions
          </Link>
        </Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;