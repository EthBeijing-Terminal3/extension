import React, { createContext, useState } from "react";

export type Globals = {
  accountAddress?: string,
  setAccountAddress?: (accountAddress: string) => void,
}

export const GlobalsContext = createContext<Globals>({});

export const AppContext = ({ children }: any) => {

  const [accountAddress, setAccount] = useState<string>();
  const setAccountAddress = (accountAddress: string) => {
    setAccount(accountAddress);
  }

  // @ts-ignore
  return (<GlobalsContext.Provider value={{
      accountAddress,
      setAccountAddress
    }}>
      {children}
    </GlobalsContext.Provider>
  );
}
