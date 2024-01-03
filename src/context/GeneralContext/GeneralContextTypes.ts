import { Dispatch, ReactNode } from "react";

export type ActionType = {
    type: 'SPLASH_SCREEN_STATE',
    payload: boolean
} | {
    type: 'TRANSITION_IN',
    payload: boolean
} | {
    type: 'TRANSITION_OUT',
    payload: boolean
};

export interface StateType {
    activeSplashScreen: boolean,
    transitionIn: boolean
    transitionOut: boolean
}

export type GeneralContextType = {
    state: StateType,
    dispatch: Dispatch<ActionType>,
    transitionIn: (transition: boolean) => void,
    transitionOut: (transition: boolean) => void
}

export type GeneralContextProviderType = {
    children: ReactNode
}