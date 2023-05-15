import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';

export const Container = () => {
  return (
    <>
      <div
        className={`text-white w-3/4 md:w-1/2 h-5/6 bg-[url("../../../src/assets/img/header5.svg")] bg-cover bg-no-repeat bg-center rounded-xl flex flex-col gap-5 shadow-md`}
      >
        <Header />
        <MainSection />
      </div>
    </>
  );
};
