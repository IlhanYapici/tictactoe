import { ReactNode } from "react"
import { TBoard } from "../GameContext/GameContext-types"

export type TGetBestMove = (
	board: TBoard,
	depth: number,
	maximizing: boolean,
	callback?: (value: any) => void
) => any

export interface IAiFunctions {
	getBestMove: TGetBestMove
	setMaxDepth: React.Dispatch<React.SetStateAction<number>>
}

export interface IAiState {
	maxDepth: number
	nodesMap: any
}

export interface IAiContext {
	state: IAiState
	functions: IAiFunctions
}

export interface IAiProviderProps {
	children: ReactNode
}
