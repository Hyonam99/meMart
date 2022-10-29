import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";
import EcomAll from "./EcomAll";




const Home = () => {

  const [blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  const  base = "https://dummyjson.com/products";
 

  useEffect(() => {
    async function getPost() { 
      const data = await axios.get(base);
      setTimeout(() =>{
            setPending(false)
            setBlogs(data.data.products)
          }, 3000)
          setError(null)
    }

// ! the code below is replaced with the code above by using the async await on axios: do not delete !
    // axios.get(base)
    // .then((data) => {

    //   console.log(data)

    //   setTimeout(() =>{
    //     setPending(false)
    //     setBlogs(data.data.products)
    //   }, 3000)
    //   setError(null)
    // })

    getPost()
    .catch((error) => {
        setTimeout(() =>{
        setPending(false)
        setError(error)
      }, 3000)
    });

    
  }, [])
  


  return ( 
    
    <section className="home">
      <div className="blog-heading">
        <p>Explore all Categories here</p>

      </div>

      

      
        {error && <div> <ErrorPage /> </div>}

        {pending && <div><Loading /></div>}
        
        {blogs && <EcomAll  allblog={blogs} />}
        

      
   
        
            </section>
  );
}

 
export default Home;