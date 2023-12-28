import { ActionType, StateType } from "./GeneralContextTypes";

export const GeneralContextReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "SPLASH_SCREEN_STATE":
            const splashScreenState: StateType = {
                ...state,
                activeSplashScreen: action.payload
            };

            return { ...splashScreenState };
        default:
            return state;
    }
}