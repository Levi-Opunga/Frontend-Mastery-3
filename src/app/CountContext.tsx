"use client";

import React from "react";
 import{ useState } from "react";
import { useContext, Dispatch, SetStateAction, createContext } from "react";
import { Details } from "./page";

export type CartDetails = {
  product: Details;
  number: number;
  setProduct: Dispatch<SetStateAction<Details>>;
  setNumber: Dispatch<SetStateAction<number>>;
};


const GlobalContext = createContext<{ cart: CartDetails[];setCart: Dispatch<SetStateAction<CartDetails[]>>;}>({ cart: [], setCart: (): CartDetails[] => [] });

//ts-ignore
export const GlobalContextProvider = (props: { children : React.ReactNode }) => {
  const children= props.children
  const [item, setItem] = useState<CartDetails[]>([]);

  return (
    <GlobalContext.Provider value={{ cart: item, setCart: setItem }}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext  = () => useContext(GlobalContext);
