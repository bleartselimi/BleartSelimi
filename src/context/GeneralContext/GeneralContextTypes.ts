import { Dispatch, ReactNode } from "react";

export type ActionType = {
    type: 'SPLASH_SCREEN_STATE',
    payload: boolean
} | {
    type: 'TRANSITION_IN',
    payload: {
        to: string,
        transition: boolean
    }
} | {
    type: 'TRANSITION_OUT',
    payload: boolean
} | {
    type: 'MENU_STATE',
    payload: boolean
};

export interface StateType {
    activeSplashScreen: boolean,
    openedMenu: boolean,
    transitionIn: {
        to: string,
        transition: boolean
    }
    transitionOut: boolean
}

export type GeneralContextType = {
    state: StateType,
    dispatch: Dispatch<ActionType>,
    transitionIn: (to: string, transition: boolean) => void,
    transitionOut: (transition: boolean) => void,
    menuOpend: (open: boolean) => void
}

export type GeneralContextProviderType = {
    children: ReactNode
}