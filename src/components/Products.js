import { toast } from 'react-toastify';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Products = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addCart() {
    dispatch(add(post));
    toast.success("Item Added To cart");
  }

  function removeCart() {
    dispatch(remove(post.id));
    toast.error("Item Removed From cart");
  }

  return (
    <div className='flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img className='h-full w-full' src={post.image} alt='imag' />
      </div>
      <div className='flex justify-between gap-12 item-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        <div className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase'>
          {
            cart.some((p) => p.id === post.id) ?
              <button onClick={removeCart}>Remove Item</button> :
              <button onClick={addCart}>Add to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
