import { ActionType, StateType } from "./GeneralContextTypes";

export const GeneralContextReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "SPLASH_SCREEN_STATE":
            const splashScreenState: StateType = {
                ...state,
                activeSplashScreen: action.payload
            };

            return { ...splashScreenState };

        case "TRANSITION_IN":
            const transitionInState: StateType = {
                ...state,
                transitionIn: action.payload
            };

            return { ...transitionInState };
        case "TRANSITION_OUT":
            const transitionOutState: StateType = {
                ...state,
                transitionOut: action.payload
            };

            return { ...transitionOutState };
        default:
            return state;
    }
}