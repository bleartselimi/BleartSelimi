import { ReactNode } from "react";

export type ContentPanelType = {
    className?: string,
    areaOne?: ReactNode,
    hasAreaOneMask?: boolean,
    areaTwo?: ReactNode,
    areaThree?: ReactNode,
    areaFour?: ReactNode,
    delay?: number
}