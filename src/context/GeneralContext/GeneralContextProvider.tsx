import { useEffect, useReducer } from "react";
import { GeneralContext, initialState } from "./GeneralContext";
import { GeneralContextProviderType } from "./GeneralContextTypes";
import { GeneralContextReducer } from "./GeneralContextReducer";
import { Transition } from "../../components";

const GeneralContextProvider = ({ children }: GeneralContextProviderType) => {

  const [state, dispatch] = useReducer(GeneralContextReducer, initialState);

  const transitionIn = (transition: boolean) => {
    dispatch({ type: "TRANSITION_IN", payload: transition })
  }

  const transitionOut = (transition: boolean) => {
    dispatch({ type: "TRANSITION_IN", payload: transition })
  }

  useEffect(() => {
    
  }, [state.transitionIn, state.transitionOut])

  return (
    <GeneralContext.Provider value={{
      state,
      dispatch,
      transitionIn,
      transitionOut
    }}>
      <Transition />
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider