import React, { createContext, useState, useContext } from "react";

const IdClickedContext = createContext();

export const IdClickedProvider = ({ children }) => {
  const [clickedId, setClickedId] = useState(null);

  return (
    <IdClickedContext.Provider value={{ clickedId, setClickedId }}>
      {children}
    </IdClickedContext.Provider>
  );
};

export const useIdClicked = () => {
  return useContext(IdClickedContext);
};