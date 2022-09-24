import { Dispatch, ReactNode, SetStateAction } from "react"

type TGridPos = 0 | 1 | 2

interface IGameFunctions {
	updateCurrentPlayer: () => void
	updateScore: (player: TPlayer) => void
	updateBoard: (player: TPlayer, row: TGridPos, column: TGridPos) => void
	updatePlayers: (players: IPlayers) => void
	setWinner: Dispatch<SetStateAction<TPlayer | null>>
	setWinnerStrike: (position: TLiningPos, lining: TLining) => void
	resetContext: () => void
	resetBoard: () => void
}

type TLiningPos = "row" | "column" | "diagonal"

type TLining = TGridPos | "topLeftBottomRight" | "bottomLeftTopRight"

type TBoardItem = TPlayer | null

type TBoard = [
	[TBoardItem, TBoardItem, TBoardItem],
	[TBoardItem, TBoardItem, TBoardItem],
	[TBoardItem, TBoardItem, TBoardItem]
]

interface IScore {
	player1: number
	player2: number
}

type TPlayer = 1 | 2

interface IPlayers {
	player1: string
	player2: string
}

interface IGameState {
	players: IPlayers
	currentPlayer: TPlayer
	score: IScore
	board: TBoard
	winner: TPlayer | null
	winnerStrike: {
		position: TLiningPos | null
		lining: TLining | null
	}
}

interface IGameContext {
	state: IGameState
	functions: IGameFunctions
}

interface IGameProviderProps {
	children: ReactNode
}

export type {
	IGameProviderProps,
	IGameContext,
	IScore,
	IPlayers,
	TPlayer,
	TBoard,
	TGridPos,
	TLining,
	TLiningPos
}
