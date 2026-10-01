import { NavLink, useNavigate } from "react-router-dom";
import "../layout/style/all.css"; 

export const ErrorPages = () => {
    const navigate = useNavigate();

    const handelGoBack =() =>{
        navigate(-1);
    }

    return(
    <>
     <h1>404 Error page  </h1>
    <div className="error-btn">
    
        <button className="btn-back" onClick={handelGoBack}>Go Back to previour page</button>

        <NavLink to ="/" className="btn-back">
            Go back to Home page
        </NavLink>
    </div>
  
    </>
    );
};