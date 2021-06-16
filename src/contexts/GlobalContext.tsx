import { createContext, ReactNode, useContext, useState } from "react";

interface IGlobalContextData {
  isToggle: boolean,
  setIsToggle: (value: boolean) => void
}

interface IGlobalContextProviderProps {
  children: ReactNode
}

export const GlobalContext = createContext({} as IGlobalContextData)

export function GlobalContextProvider({ children }: IGlobalContextProviderProps) {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <GlobalContext.Provider value={{ isToggle, setIsToggle }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(GlobalContext)
}