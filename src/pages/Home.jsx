import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function fetchProduct() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log(error);
      setPost([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-10 min-h-[80vh]">
          {post.map((post) => {
            return <Products key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          <p>No Post Available</p>
        </div>
      )}
    </div>
  );
};

export default Home;
