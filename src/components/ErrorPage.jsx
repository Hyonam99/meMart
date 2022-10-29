import React from "react";
import './Loadingstates.css'
const ErrorPage = () => {
  return ( 
    <div className="error-note">
        <h3 className="error-heading">Error while Loading page</h3>
        <p className="error-title">If you still encouter this issue after you refresh your browser</p>
        <p className="error-title">Check the website address and check your internet  </p>
    </div>
   );
}
 
export default ErrorPage;