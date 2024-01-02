import React from "react";
import Menu from "./Menu";

const Base = ({ titulo, children }) => {
  return (
    <>
      <Menu />
      <div className="flex-1 px-8 md:px-12 lg:px-20 text-yellow-900">
        {titulo && (
          <h1 className="text-center text-2xl lg:text-3xl m-6 md:mb-8 lg:mb-12">
            {titulo}
          </h1>
        )}
        <div
          className="flex-1 flex flex-col gap-4 text-justify pb-8
                     sm:gap-6 md:pb-12 lg:pb-20 lg:gap-8 lg:text-lg"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Base;
