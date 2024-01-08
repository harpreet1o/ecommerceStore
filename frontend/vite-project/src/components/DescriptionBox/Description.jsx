import React from "react";

export const Description = () => {
  return (
    <div className="mx-40 my-30">
      <div className="flex">
        <div className="flex justify-center items-center font-semibold w-44 h-20 border-solid border-2 border-slate-200">
          Descripiton
        </div>
        <div className="flex justify-center items-center font-semibold w-44 h-20 border-solid border-1 border-slate-200 bg-slate-50 text-slate-400">
          Review(122)
        </div>
      </div>
      <div className="flex flex-col gap-6 border-solid border-2 border-gray-50 p-12 pb-16">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima est
          doloribus ipsa qui repellendus in ipsam ea voluptas quibusdam!
          Corrupti fugit quam eveniet sed nam ad cum nisi doloribus vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          in repudiandae nisi consequatur ducimus? Tempore deserunt nemo ea?
          Necessitatibus consectetur nostrum deserunt mollitia possimus
          aspernatur assumenda suscipit harum culpa dolorem?
        </p>
      </div>
    </div>
  );
};
