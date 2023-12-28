import { createContext } from "react";
import { GeneralContextType, StateType } from "./GeneralContextTypes";

export const initialState: StateType = {
    activeSplashScreen: false
};

export const GeneralContext = createContext<GeneralContextType | null>(null);