
const loadProductData = async () => {
   const res = await fetch(`https://fakestoreapi.com/products`, { cache: 'force-cache' })
   const data = await res.json();
   return data;
};

export default loadProductData;