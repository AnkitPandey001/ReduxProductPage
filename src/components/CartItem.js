import React from 'react';
import { MdDeleteForever } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
        <div className="ml-4">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-500">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          <p className="text-green-600 font-semibold mt-2">${item.price}</p>
        </div>
      </div>
      <button onClick={removeFromCart} className="text-red-500 hover:text-red-700">
        <MdDeleteForever size={24} />
      </button>
    </div>
  );
};

export default CartItem;
