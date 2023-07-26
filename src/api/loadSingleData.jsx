
const loadSingleData = async (id) => {
   const res = await fetch(`https://fakestoreapi.com/products/${id}`,
      { cache: 'no-cache' })
   const data = await res.json();
   return data;
};

export default loadSingleData;