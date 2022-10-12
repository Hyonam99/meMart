import { useState } from "react";
import Avatar from './Image assets/Avatar.jpg'

function Emenf({ allblog, companyName }) {
  
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

  
  return (
    <div className="devMessage">
     <h4>Women section</h4>
      <p>Page developent is in progress</p>

    </div>
  
  );
}

export default Emenf;





/********************************************
 * <h3>{blog.id}</h3>
            <h4>{blog.userName}</h4>
            <p>{blog.email}</p>
            <p>{blog.phoneNumber}</p>
            <p>{blog.profile.firstName}</p>
            <p>{blog.orgName}</p>
 ***************************************************/