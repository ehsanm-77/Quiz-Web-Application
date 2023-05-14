import { Box } from '@mui/material';
import { IContainer } from '../../types/type';

export const Container = ({ currentTheme }: IContainer) => {
  console.log(currentTheme);
  return (
    <Box>
      {currentTheme === 'dark' ? <div className="text-white">EMO</div> : 'null'}
    </Box>
  );
};
