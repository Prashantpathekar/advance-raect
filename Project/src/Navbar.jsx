import React from 'react'
import './tailwind.css'
export default function Home() {
  return (
    <div className="w-full">

      {/* Top Bar */}
      <div className="flex justify-between px-10 py-2 text-sm bg-gray-100">
        <span>📞 +91-9314444747</span>
        <div className="space-x-4">
          <span className="cursor-pointer">Track Order</span>
          <span className="cursor-pointer">Help Center</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-3xl font-bold">
          Wooden<span className="text-orange-500">Street</span>
        </h1>

        <input
          type="text"
          placeholder="Search Products, Color & More..."
          className="w-1/2 px-4 py-2 border rounded-md focus:outline-none"
        />

        <div className="flex gap-6">
          <span className="cursor-pointer">❤️ Wishlist</span>
          <span className="cursor-pointer">🛒 Cart</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex gap-8 px-10 py-3 border-t text-sm font-medium">
        {[
          "Sofas",
          "Living",
          "Bedroom",
          "Mattress",
          "Dining",
          "Storage",
          "Study & Office",
          "Outdoor",
          "Decor"
        ].map((item) => (
          <span key={item} className="cursor-pointer hover:text-orange-500">
            {item}
          </span>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="flex gap-6 px-10 py-10">

        {/* Left Banner */}
        <div className="w-[65%] bg-[#b78956] text-white rounded-xl p-10 flex flex-col justify-center">
          <p className="text-lg">Crafted for Royal Sleep</p>
          <h1 className="text-5xl font-bold mt-2">Beds</h1>

          <p className="mt-6 text-lg">Starting From</p>
          <h2 className="text-4xl font-bold mt-2">₹11,699*</h2>

          <button className="mt-6 w-fit bg-white text-[#b78956] px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
            BUY NOW
          </button>
        </div>

        {/* Right Offers */}
        <div className="w-[35%] flex flex-col gap-6">

          <div className="bg-[#f4e8dc] rounded-xl p-6">
            <h3 className="text-xl font-bold">LOWEST PRICE</h3>
            <p className="mt-2 text-lg">Now at ₹34,999</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md">
              BUY NOW
            </button>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="text-xl font-bold">
              Recline | Revolve | Rock
            </h3>
            <p className="mt-2 text-lg">Now at ₹29,999</p>
          </div>

        </div>
      </section>

    </div>
  );
}


// write way => const arr = [1, 2, 3];
//<h1>{arr}</h1>    📌 Arrays are converted to strings if directly rendered.
//  error => const user = { name: "Prashant" };
//<h1>{user}</h1>    📌 Objects cannot be rendered directly.


