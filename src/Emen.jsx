import React from "react";
import { useState, useEffect } from "react";
import EmenAll from "./EcomAll";




const Emen = () => {

  const [blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/")
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

      

      
      {error && <div> { error } </div>}
        {pending && <div>Fetching data from resource please wait</div>}
        {blogs && <EmenAll  allblog={blogs} companyName='Farida company'/>}
        

      
   
        
            </section>
  );
}

 
export default Emen;