import { useEffect, useState ,useContext } from "react";

import  LOGO  from "../assets/file.png";
// import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const data = {
      name: 'Aakash Yadav',
    };
    setUserName(data.name);
  }, []);
  const [btnNameReact,setBtnNameReact] = useState('Login')
  console.log("Header render")

  const onlineStatus = useOnlineStatus();

  //subscribibg to the  store using selector

const {logggdInUser} = useContext(UserContext)

  useEffect(()=>{
    console.log("useEffect called")
  })
//   <!-- 1. If no dependency array => useEffect is called on every render -->
// <!-- 2. If dependency array is empty = []  => useEffect is called on initial render(just once) -->
// <!-- 3. If dependency array is [btnNameReact] => called everytime  btnName is updated-->
  
const cartItems = useSelector((store)=>store.cart.items);
return (
  <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

    <div className="flex  justify-between shadow-lg mb-2  w-full h-[100px] bg-[#edf7f9] ">
      <div className="logo-container">
        <img className="w-32 mb-36" src={LOGO}></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
         
          <li className="px-2  hover:text hover:text-[#fc8019]"> <Link to="/">Home</Link></li>
          <li className="px-2 hover:text hover:text-[#fc8019]" >
            <Link to="/about"> About Us</Link>
            </li>
          <li className="px-2 hover:text hover:text-[#fc8019]"><Link to ="/contact">Contact Us</Link></li>
          {/* <li className="px-4">
            <Link to ="/grocery">Grocery</Link>
            </li> */}
          <li className="px-2 font-medium text-xl hover:text hover:text-[#fc8019]">
          <Link to ="/cart">
            Cart({cartItems.length}items)</Link></li>
            
        <button className="login" onClick={()=>{ btnNameReact ==="Login"
            ? setBtnNameReact('Logout')
            :setBtnNameReact("Login") }}>{btnNameReact}{onlineStatus?"🟢":"🔴"}  
        </button>
        {/* <li className="px-2 font-bold">{logggdInUser}</li> */}

        </ul>
      </div>
    </div>
    </UserContext.Provider>
  );
};

export default Header;
