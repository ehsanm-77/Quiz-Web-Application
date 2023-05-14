import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';

export default function Test() {
  return (
    <Box
      sx={{
        bgcolor: 'text.disabled',
        color: purple['A700'],
        boxShadow: '0 0 0.75rem 1px gray',
        p: 5,
        // filter: 'drop-shadow(10px 10px 0.75rem #4444dd)',
        // border: 2,
        // borderColor: green[600],
        borderRadius: 10,
      }}
    >
      <div>Test</div>
    </Box>
  );
}
