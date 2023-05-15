import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';

export const Container = ({ currentTheme }) => {
  return (
    <>
      <div
        className={`${
          currentTheme === 'dark'
            ? 'bg-blue-200 text-black'
            : 'bg-sky-800 text-white'
        } w-3/4 md:w-1/2 h-5/6 rounded-xl flex flex-col gap-5 shadow-md`}
      >
        <Header />
        <MainSection currentTheme={currentTheme} />
      </div>
    </>
  );
};
