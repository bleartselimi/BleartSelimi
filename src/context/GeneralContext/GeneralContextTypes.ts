import { Dispatch, ReactNode } from "react";

export type ActionType = {
    type: 'SPLASH_SCREEN_STATE',
    payload: Boolean
};

export interface StateType {
    activeSplashScreen: Boolean
}

export type GeneralContextType = {
    state: StateType,
    dispatch: Dispatch<ActionType>,
}

export type GeneralContextProviderType = {
    children: ReactNode
}