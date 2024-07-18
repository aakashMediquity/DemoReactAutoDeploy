import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import toast from 'react-hot-toast';
const ItemList =({items}) =>{
   
   const dispatch = useDispatch();
   const showToast = () => {
      toast.success('Toast message'); // Example success toast
    };
 
   const handleAddItem = (item) => {
      toast.success('Added to cart!');
     dispatch(addItem(item));
   };

    return (
    <div>
     {
        items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
        
               <div className="w-9/12">
                <div className="py-2">
                   <span>{item.card.info.name}</span> 
                   <span> - ₹ {
                    item.card.info.price
                    ?item.card.info.price /100 :
                   item.card.info.defaultPrice/100}</span> 
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div  className="w-3/12 p-4"> 
                <img src={CDN_URL+item.card.info.imageId}></img>
               <div className="relative">
               <button className="bg-white w-24 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-2  rounded-md absolute shadow-md left-[50%] -bottom-4 -translate-x-[50%]" onClick={()=>handleAddItem(item)} > 
                  
                  Add +</button>
               </div>
               {/* <img src={CDN_URL+item.card.info.imageId}></img> */}
               </div>
            </div>
        ))
     }
    </div>
    );
}
export default ItemList;