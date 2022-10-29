import React from "react";
import { useState, useEffect } from "react";
import EmenAll from "./EcomAll";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";


const Emen = () => {

  const [blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
    .then((response) => {
      if(!response.ok){
          throw Error('could not fetch data from resource')
      }
      return response.json()})
    .then(data => { 
      console.log(data)
      setBlogs(data)
      setPending(false)
      setError(null)
    })
    .catch((error) => {setError(error.message);})
    setPending(false)
  }, [])
  


  return ( 
    
    <section className="home">
      <div className="blog-heading">
        <p>Mens Categories here</p>
      </div>

      

      
      {error && <div> <ErrorPage /> </div>}

          {pending && <div><Loading /></div>}

        {blogs && <EmenAll  allblog={blogs} />}
        

      
   
        
            </section>
  );
}

 
export default Emen;