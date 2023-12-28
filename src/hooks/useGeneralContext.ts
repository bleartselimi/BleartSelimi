import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext/GeneralContext";
import { GeneralContextType } from "../context/GeneralContext/GeneralContextTypes";

export const useGeneralContext = (): GeneralContextType => {
    const context = useContext(GeneralContext);

    if (!context) {
        throw new Error('useGeneralContext must be used within a GeneralContextProvider');
    }

    return context;
};