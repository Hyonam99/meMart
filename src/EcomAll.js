import { useState } from "react";
import Avatar from './Image assets/Avatar.jpg'

function EcomAll({ allblog, companyName }) {
  
  const [unit1, setUnit1] = useState(0);
  const [unit2, setUnit2] = useState(10);

  const nextP = () => {
    if(unit2 >= 50){
      setUnit2(unit2)
    }else {
      setUnit2(unit2 + 10)
      setUnit1(unit1 + 10)
    }
  }
  const prevP = () => {
    if(unit1 == 0){
      setUnit1(unit1)
    }else {
      setUnit1(unit1 - 10)
      setUnit2(unit2 - 10)
    }
   
  }

  // console.log(allblog.length)
  return (
    <div className="product-preview">
      
      <section className="products-container" >
      {allblog
        .map((blog) => (
           
                <div className="product-display" key={blog.id}>
                    <div className="displayImage">
                      <img src={blog.category.image} alt="" />
                    </div>
                    <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <p>{`price : N ${blog.price}`}</p>
                </div>
          
          
        ))
        .slice(unit1, unit2)}

        </section>
      <div className="pagebreak">
        <button onClick={prevP}>Prev</button>
        <p> {`${(unit1 / 10) + 1}....`} </p>
        <button onClick={nextP}>Next</button>
        <p>Showing {`${unit1 } entries out of 200`}</p>
      </div>
    </div>
  );
}

export default EcomAll;


