import React, { useEffect, useState } from "react";

const PopularClassesSection = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-steel.vercel.app/popularClass`)
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);
  return (
    <div className="mt-20">
        <h1 className="text-4xl text-[#46045e] font-bold text-center mb-16">Popular Class</h1>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-1 lg:grid-cols-3">
       {
        popularClass?.map(popular=><>
         <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 rounded-lg"
            src={popular?.image}
            alt="Shoes"
          />
        </figure>
        </div>
        </>)
       }
      </div>
    </div>
  );
};

export default PopularClassesSection;
