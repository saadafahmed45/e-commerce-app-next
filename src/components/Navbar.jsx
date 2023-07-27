import React from 'react';

const Navbar = () => {
   return (
      <div>
         <div className="bg-purple-800 flex justify-around   h-[50px] p-2">
            <h1 className="text-3xl text-yellow-200 font-bold">E-commarce Site</h1>
            <ul className="text-2xl  text-white">
               <a className='m-2 p-2' href="/">Home</a>
               <a className='m-2 p-2' href="/products">Product</a>
               <a className='m-2 p-2' href="/cart">cart</a>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;