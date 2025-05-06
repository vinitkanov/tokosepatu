import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const thumbnails = [
  '/assets/img1.png',
  '/assets/img2.png',
  '/assets/img3.png',
  '/assets/img4.png'
];

export default function SneakerProductPage() {
  const [selectedImg, setSelectedImg] = useState(thumbnails[0]);
  const [amount, setAmount] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const increase = () => setAmount((prev) => prev + 1);
  const decrease = () => setAmount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    setCartCount((prev) => prev + amount);
    setAmount(1);
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-20 md:py-10 font-sans">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="text-xl font-bold">sneakers</div>
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img
            src={selectedImg}
            alt="sneaker"
            className="rounded-xl w-full max-w-md mx-auto"
          />
          <div className="flex gap-4 justify-center mt-4">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                onClick={() => setSelectedImg(thumb)}
                className={`w-16 h-16 object-cover rounded-lg border ${
                  selectedImg === thumb ? 'border-black' : 'border-transparent'
                } cursor-pointer`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">Converse</p>
          <h1 className="text-4xl font-bold mt-2 mb-4 leading-tight">Walk Star<br />Trainer</h1>
          <p className="text-gray-600 mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl font-bold">Rp799.000</span>
            <span className="text-gray-400 line-through">Rp990.000</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decrease}
              className="bg-gray-200 px-2 py-1 rounded text-xl font-bold"
            >
              -
            </button>
            <span className="text-lg font-medium">{amount}</span>
            <button
              onClick={increase}
              className="bg-gray-200 px-2 py-1 rounded text-xl font-bold"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
