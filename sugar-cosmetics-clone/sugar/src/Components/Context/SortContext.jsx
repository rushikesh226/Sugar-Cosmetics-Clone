import { createContext, useState } from "react";

export const SortContext = createContext();


const SortContextProvider = ({ children }) => {
    const [sort, setSort] = useState("posts");
    const handleSort=(val)=>{
        setSort(val);
    }
  return (
    <SortContext.Provider value={{sort,handleSort}}>
      {children}
    </SortContext.Provider>
  );
};
export default SortContextProvider;
