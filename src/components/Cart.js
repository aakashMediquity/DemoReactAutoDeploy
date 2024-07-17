import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    // only affected on small apart such as cartItem good practice .Not using complete store
    const cartItem = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart())

    }
    return (
    <div className="text-center m-10 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">

        <button className="p-2 bg-black text-white rounded-lg m-2" onClick={handleClearCart}>Cart</button>
           
           {cartItem.length == 0 && <h1>Cart is empty.Add item to the cart.</h1>}
            <ItemList items={cartItem}></ItemList>
        </div>
        </div>

)};

export default Cart;