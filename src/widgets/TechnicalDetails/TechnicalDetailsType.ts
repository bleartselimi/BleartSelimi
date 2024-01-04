import { ReactElement } from "react"

export type TechnicalDetailsType = {
    overview: ReactElement,
    frontendTechnologies?: TechnologyType[],
    backendTechnologies?: TechnologyType[],
    otherTechnologies?: TechnologyType[],
    architecture?: ArchitectureType
}

type TechnologyType = {
    title: string,
    icon: string
}

type ArchitectureType = {
    description: ReactElement,
    images: string[]
}