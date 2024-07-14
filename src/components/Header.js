import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState('Login')
  console.log("Header render")

  const onlineStatus = useOnlineStatus();


  useEffect(()=>{
    console.log("useEffect called")
  })
//   <!-- 1. If no dependency array => useEffect is called on every render -->
// <!-- 2. If dependency array is empty = []  => useEffect is called on initial render(just once) -->
// <!-- 3. If dependency array is [btnNameReact] => called everytime  btnName is updated-->
  
return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> onlineStatus : {onlineStatus?"🟢":"🔴"}</li>
          <li> <Link to="/">Home</Link></li>
          <li>
            <Link to="/about"> About Us</Link>
            </li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li><Link to ="/grocery">Grocery</Link></li>
          <li>Cart</li>
        <button className="login" onClick={()=>{ btnNameReact ==="Login"
            ? setBtnNameReact('Logout')
            :setBtnNameReact("Login") }}>{btnNameReact}
          
        </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
