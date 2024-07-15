
import { useNavigate } from 'react-router-dom';
import './App.css'
import ProductCard from './components/CardComponts'
import React, { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  // const [isLaoding,setloading] = useState(false);

  /// handleAPI 
  useEffect(() => {
    // setLoading(true);
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);

  //  HandleProductDetails
  const handleProductDetails =(product) =>{
     navigate("/products-details",{state:product});
  }

  return (
    <>
    <main className='max-w-screen-xl mx-auto'>
      <section className="flex justify-center items-cente flex-col max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-3 gap-2"  >
        {
          products.map(( product , index )=>{
            return(
              <ProductCard
              key={index}
              name={product.name}
              id={product.id}
              // title={product.title}
              // image={product.thumbnail}
              // body={product.body}
              // slug={product.slug}
              // handleProductDetails={()=> handleProductDetails(product)}
              />
            )
          })
        }
      </div>
      </section>
    </main>
     
    </>
  )
}

export default App
