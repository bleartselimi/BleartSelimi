import { useReducer } from "react";
import { GeneralContext, initialState } from "./GeneralContext";
import { GeneralContextProviderType } from "./GeneralContextTypes";
import { GeneralContextReducer } from "./GeneralContextReducer";
import { Transition } from "../../components";

const GeneralContextProvider = ({ children }: GeneralContextProviderType) => {

  const [state, dispatch] = useReducer(GeneralContextReducer, initialState);

  const transitionIn = (to: string, transition: boolean) => {
    dispatch({
      type: "TRANSITION_IN", payload: {
        to: to,
        transition: transition
      }
    })
  }

  const transitionOut = (transition: boolean) => {
    dispatch({ type: "TRANSITION_OUT", payload: transition })
  }

  const menuOpend = (open: boolean) => {
    dispatch({ type: "MENU_STATE", payload: open })
  }

  return (
    <GeneralContext.Provider value={{
      state,
      dispatch,
      transitionIn,
      transitionOut,
      menuOpend
    }}>
      <Transition />
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider