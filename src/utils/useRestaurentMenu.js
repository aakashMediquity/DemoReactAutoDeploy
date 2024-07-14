import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(resInfo,"resinfo")

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  console.log(resInfo,"resinfo details")
  return resInfo;
};

export default useRestaurentMenu;
