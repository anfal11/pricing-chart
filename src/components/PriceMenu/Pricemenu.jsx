import { useEffect, useState } from "react";
import { AiFillCheckCircle } from 'react-icons/ai';

const Pricemenu = () => {
  const [priceMenu, setPriceMenu] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPriceMenu(data));
  }, []);

  return (
    <div className="m-8">
      <h2 className="text-7xl mb-10 font-bold text-center">Best Price in this City</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceMenu.map((item) => (
          <div key={item.id} className="flex">
            <div className="bg-sky-500 rounded-lg p-6 text-white flex flex-col shadow-xl shadow-indigo-400/60">
             <div className="flex-grow">
             <p className="text-4xl mb-2 text-center">$<span className="font-extrabold">{item.price}</span>/month</p>
              <h3 className="text-3xl mb-4 underline text-center">{item.optionName}</h3>
              <ul className="text-2xl pl-6">
                {item.features.map((feature, idx) => (
                  <li className="flex items-center gap-4 mb-2" key={idx}><AiFillCheckCircle className="text-green-300"></AiFillCheckCircle>{feature}</li>
                ))}
              </ul>
             </div>
            <div className="mt-12">
              <button className="bg-green-700 w-full py-4 font-bold hover:bg-green-950 rounded-lg">Buy Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricemenu;
