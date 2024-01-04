import { ActionType, StateType } from "./GeneralContextTypes";

export const GeneralContextReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "GLOBAL_LOADING_STATE":
            const globalLoadingState: StateType = {
                ...state,
                globalLoadingState: action.payload
            };

            return { ...globalLoadingState };

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
        case "MENU_STATE":
            const menuState: StateType = {
                ...state,
                openedMenu: action.payload
            };

            return { ...menuState };
        default:
            return state;
    }
}