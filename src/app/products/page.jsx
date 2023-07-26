import loadProductData from '@/api/loadProductData';
import Link from 'next/link';
import React from 'react';

const Product = async () => {

   const product = await loadProductData();

   return (
      <div>
         {/* <h1>product{product.length}</h1> */}

         <div className="flex flex-wrap items-center justify-between p-5">
            {
               product.map(({ id, title, image, category }) => (
                  <div className="box  text-white bg-slate-600 p-4 m-3 w-[300px] h-[400px] rounded-md cursor-pointer">
                     <div>
                        <h3>{category}</h3>

                        <img className="h-[250px] w-[300px] rounded-sm mt-2" src={image} alt="thumbnail" />
                     </div>
                     <div className="mt-2 p-1">
                        <h2>{title}</h2>
                        {/* <h2>price: ${price}</h2> */}
                     </div>
                     <div className='text-right'>

                        <Link href={`/products/${id}`}

                           className='text-right text-cyan-500 text-sm'>See More..</Link>
                     </div>
                  </div>

               ))
            }
         </div>

      </div>
   );
};

export default Product;