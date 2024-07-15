
import { useNavigate } from 'react-router-dom';
import './App.css'
import ProductCard from './components/CardComponts'
import React, { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [products,setProduct] = useState(
    [
        // Fatch product
        useEffect(()=>{
            fetch(`${BASt_URL}contents/all_content/`)
            .then((res)=>res.json())
            .then((items)=>{
                setProduct(items.data);
            })
        },[])
    ]);
    
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
              title={product.title}
              image={product.thumbnail}
              body={product.body}
              description={product.slug}
              handleProductDetails={()=> handleProductDetails(product)}
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
