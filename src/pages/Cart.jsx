import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const removeFromCart = (id) => {
    dispatch(remove(id));
    toast.error("Item removed");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                    <div className="ml-4">
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                      <p className="text-gray-500">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                      <p className="text-green-600 font-semibold mt-2">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <FcDeleteDatabase size={24} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <p className="text-lg">Total Items: {cart.length}</p>
              <h2 className="text-2xl font-semibold mt-4">Total Amount: ${totalAmount.toFixed(2)}</h2>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Cart Empty</h1>
          <Link to="/">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
