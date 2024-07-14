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
    <div className="flex  justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4"> onlineStatus : {onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4"> <Link to="/">Home</Link></li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
            </li>
          <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
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
