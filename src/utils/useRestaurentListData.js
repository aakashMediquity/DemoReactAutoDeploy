import { useEffect, useState } from "react"
const useRestaurentListData =() =>{
    const [listOfRestaurents ,setListOfRestaurents] = useState([])
    const [filteredRestarent, setfilteredRestarent] = useState([]);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        const data = await fetch( "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await  data.json();
        setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    return listOfRestaurents ,filteredRestarent

    


}
export default useRestaurentListData;