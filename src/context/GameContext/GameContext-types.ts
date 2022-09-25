import { Dispatch, ReactNode, SetStateAction } from "react"

type TAvailableMoves = TGridPos[]

type TGridPos = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface IGameFunctions {
	updateCurrentPlayer: (player: TPlayer) => void
	updateScore: (player: TPlayer) => void
	updateBoard: (player: TPlayer, index: TGridPos) => void
	updatePlayerName: React.Dispatch<React.SetStateAction<string>>
	setBoard: React.Dispatch<React.SetStateAction<TBoard>>
	setWinner: Dispatch<SetStateAction<TPlayer | null>>
	setWinnerStrike: (position: TLiningPos, lining: TLining) => void
	resetContext: () => void
	resetBoard: () => void
	isBoardEmpty: (board: TBoard) => boolean
	isBoardFull: (board: TBoard) => boolean
	isBoardTerminal: (board: TBoard) => boolean | any
	getAvailableMoves: (board: TBoard) => TAvailableMoves
}

type TLiningPos = "row" | "column" | "diagonal"

type TLining = TGridPos | "topLeftBottomRight" | "bottomLeftTopRight"

type TBoardItem = TPlayer | null

type TBoard = Array<TBoardItem>

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
	TBoardItem,
	TGridPos,
	TLining,
	TLiningPos,
	TAvailableMoves
}
