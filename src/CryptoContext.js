import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({children}) => {

  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("US$")

  useEffect(() => {
    if(currency === "USD") setSymbol("US$");
    else if(currency === "MXN") setSymbol("$");
  }, [currency])
  

  return <Crypto.Provider value={{currency, setCurrency, symbol}}>{children}</Crypto.Provider>;
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}

