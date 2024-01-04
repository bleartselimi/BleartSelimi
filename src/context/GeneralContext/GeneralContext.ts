import { createContext } from "react";
import { GeneralContextType, StateType } from "./GeneralContextTypes";

export const initialState: StateType = {
    globalLoadingState: false,
    openedMenu: false,
    transitionIn: {
        to: "",
        transition: false
    },
    transitionOut: false
};

export const GeneralContext = createContext<GeneralContextType | null>(null);