import loadSingleData from '@/api/loadSingleData';
import React from 'react';

const page = async ({ params }) => {


   const data = await loadSingleData(params.id)
   const { id, title, price, image, category, description, rating } = data;
   return (
      <div className="h-screen bg-black px-8">
         dynamic: {params.id}
         <h2>{data.title}</h2>

         <div className="flex justify-between flex-wrap ">

            <div className="w-[50%]">
               <div className="box text-white bg-slate-600 p-4 m-3 w-[400px] h-[480px] 
            rounded-md cursor-pointer ">

                  <h3>{category}</h3>
                  <div>
                     <img className="h-[380px] w-auto rounded-sm" src={image} alt="thumbnail" />
                  </div>

                  <h2>price: ${price}</h2>
                  <p>{rating.rate}</p>
               </div>
            </div>

            <div className="mt-10 p-1 text-white  w-[50%]">
               <h1>Product Details:</h1>
               <h2>{title}</h2>
               <br />
               <h2>{description}</h2>
               <div className='text-xl mt-8'>
                  <button className='p-3 bg-purple-700'>add Cart</button>
               </div>
            </div>

         </div>
      </div>
   );
};

export default page;