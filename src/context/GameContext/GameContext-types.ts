import { Dispatch, ReactNode, SetStateAction } from "react"

type TGridPos = 0 | 1 | 2

interface IGameFunctions {
	updateCurrentPlayer: () => void
	updateScore: (player: TPlayer) => void
	updateBoard: (player: TPlayer, row: TGridPos, column: TGridPos) => void
	updatePlayerName: React.Dispatch<React.SetStateAction<string>>
	setWinner: Dispatch<SetStateAction<TPlayer | null>>
	setWinnerStrike: (position: TLiningPos, lining: TLining) => void
	resetContext: () => void
	resetBoard: () => void
	isBoardFull: () => boolean
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
	player: number
	computer: number
}

type TPlayer = "player" | "computer"

interface IGameState {
	playerName: string
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
	TPlayer,
	TBoard,
	TGridPos,
	TLining,
	TLiningPos
}
