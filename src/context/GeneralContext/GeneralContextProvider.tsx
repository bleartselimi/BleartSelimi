import { useEffect, useReducer, useState } from "react";
import { GeneralContext, initialState } from "./GeneralContext";
import { GeneralContextProviderType } from "./GeneralContextTypes";
import { GeneralContextReducer } from "./GeneralContextReducer";


const GeneralContextProvider = ({ children }: GeneralContextProviderType) => {

  const [state, dispatch] = useReducer(GeneralContextReducer, initialState);

  const splashScreenSession = () => {
    if (!sessionStorage.getItem('dontShowSplashScreen')) {
      sessionStorage.setItem('dontShowSplashScreen', 'true');
    }
  }

  const detectDocumentReadyState = () => {
    document.onreadystatechange = function () {
      console.log(document.readyState);
      dispatch({ type: "SPLASH_SCREEN_STATE", payload: document.readyState === "complete" ? true : false });
      splashScreenSession()
      // var state = document.readyState
      // if (state == 'complete') {
      //   const introLogo = document.querySelector('.page_intro--logo');
      //   if (introLogo) {
      //     Promise.all(
      //       introLogo.getAnimations().map(
      //         function (animation) {
      //           return animation.finished
      //         }
      //       )
      //     ).then(() => {
      //       const loadingScreen = document.querySelector(".page_intro_logo--wrapper");
      //       loadingScreen.style.cssText = "height: 0px; visibility: collapse;"
      //       IntersectionObserverInit();
      //       document.querySelector("body").style.overflowY = "auto";
      //     })
      //   }
      // }
    }
  }

  useEffect(() => {
    detectDocumentReadyState()
  }, [])

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