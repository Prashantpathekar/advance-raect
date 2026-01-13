import React from "react";

const Map = () => {
const products = [
  {
    id: 1,
    name: "Chair",
    price: 2999,
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "Table",
    price: 4999,
    image: "/1.jpg",
  },
  {
    id: 3,
    name: "Sofa",
    price: 12999,
    image: "/1.jpg", // exact name
  },
];


  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
      {products.map((item) => (
        <div key={item.id} className="w-64 bg-white rounded-xl shadow p-4">
          <img
            src={item.image}
            alt={item.name}
          className="h-40 w-full object-cover rounded-lg"/>
          <h2 className="font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
