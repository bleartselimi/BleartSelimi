import { Dispatch, SetStateAction } from "react"

export type NavigationMenuType = {
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>
}