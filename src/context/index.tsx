import React, { createContext, useContext, useState } from "react";

interface PropsType {
  children: any;
}

export const Mahadi = createContext<any>({} as any);

export const DemoContext: React.FC<PropsType> = ({ children }) => {
  const [userInputText, setUserInputText] = useState("Mahadi Context");

  const values = {
    userInputText,
    setUserInputText,
  };

  return <Mahadi.Provider value={values}>{children}</Mahadi.Provider>;
};

export const useCanvasContext = () => useContext(Mahadi);
