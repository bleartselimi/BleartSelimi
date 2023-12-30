import { useReducer } from "react";
import { GeneralContext, initialState } from "./GeneralContext";
import { GeneralContextProviderType } from "./GeneralContextTypes";
import { GeneralContextReducer } from "./GeneralContextReducer";

const GeneralContextProvider = ({ children }: GeneralContextProviderType) => {

  const [state, dispatch] = useReducer(GeneralContextReducer, initialState);

  return (
    <GeneralContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider