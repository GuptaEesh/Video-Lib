import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const data = await axios.get("/api/categories");
    setCategories(data.data.categories);
  }, []);
  return (
    <DataContext.Provider value={{ categories }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
