import { Box } from '@mui/material';
import { IContainer } from '../../types/type';
import Header from '../Header/Header';
import Main from '../Main/Main';

export const Container = ({ currentTheme }: IContainer) => {
  console.log(currentTheme);
  return (
    <>
      <div
        className={`text-white w-3/4 h-4/6 bg-[url("../../../src/assets/img/header5.svg")] bg-cover bg-no-repeat bg-center rounded-xl flex flex-col gap-5 shadow-md`}
      >
        <Header />
        <Main />
      </div>
    </>
  );
};

// <Box>
//   {currentTheme === 'dark' ? <div className="text-white">EMO</div> : 'null'}
// </Box>
// className='bg-[url("../../../src/assets/img/header.jpg")] bg-cover bg-center h-1/4'
