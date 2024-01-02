import { Dispatch, ReactNode, SetStateAction } from "react"

export type ModalType = {
    children: ReactNode,
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>
}