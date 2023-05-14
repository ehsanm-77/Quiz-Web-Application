import React from 'react';

export default function Main() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-full gap-10">
        <div className="bg-[url('../../../src/assets/img/quiz3.jpg')] bg-cover bg-no-repeat bg-center text-white p-3 rounded-xl w-5/6 h-1/4 shadow-2xl">
          Are you sure?
        </div>
        <div className="grid grid-col-1 gap-4 w-full">
          <button className="w-3/4 bg-white text-black p-1 rounded-md mx-auto focus:bg-green-500 shadow-2xl">
            yes
          </button>
          <button className="w-3/4 bg-white text-black p-1 rounded-md mx-auto focus:bg-green-500 shadow-2xl">
            no
          </button>
          <button className="w-3/4 bg-white text-black p-1 rounded-md mx-auto focus:bg-green-500 shadow-2xl">
            yes
          </button>
          <button className="w-3/4 bg-white text-black p-1 rounded-md mx-auto focus:bg-green-500 shadow-2xl">
            no
          </button>
        </div>
      </div>
    </>
  );
}
