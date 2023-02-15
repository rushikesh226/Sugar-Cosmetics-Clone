import { createContext, useState } from "react";

export const SortContext = createContext();


const SortContextProvider = ({ children }) => {
    const [sort, setSort] = useState("posts");
    const handleSort=(val)=>{
        setSort(val);
    }
    const [loading,setLoading]=useState(true);
    const handleLoading=(val)=>{
      setLoading(val);
    }
  return (
    <SortContext.Provider value={{sort,handleSort,loading,handleLoading}}>
      {children}
    </SortContext.Provider>
  );
};
export default SortContextProvider;
