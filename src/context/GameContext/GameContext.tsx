import { createContext, useState } from "react"

import {
	IGameProviderProps,
	IGameContext,
	IScore,
	TPlayer,
	TBoard,
	TBoardItem,
	TGridPos,
	TLiningPos,
	TLining,
	TAvailableMoves
} from "./GameContext-types"

const GameContext = createContext({} as IGameContext)

function GameProvider({ children }: IGameProviderProps) {
	const [playerName, setPlayerName] = useState<string>("Player")

	/**
	 * Setting current player as 2 because useEffect in Grid component
	 * will trigger updateCurrentPlayer.
	 */
	const [player, setPlayer] = useState<TPlayer>("player")
	const [winner, setWinner] = useState<TPlayer | null>(null)
	const [score, setScore] = useState<IScore>({ player: 0, computer: 0 })
	const [position, setPosition] = useState<TLiningPos | null>(null)
	const [lining, setLining] = useState<TLining | null>(null)
	const [board, setBoard] = useState<TBoard>(Array<TBoardItem>(9).fill(null))

	const updateCurrentPlayer = (player: TPlayer) => {
		setPlayer(player)
	}

	const updateBoard = (player: TPlayer, index: TGridPos) => {
		let cp = [...board] as TBoard

		cp[index] = player

		setBoard(cp)
	}

	const updateScore = (player: TPlayer) => {
		switch (player) {
			case "player":
				setScore({ ...score, player: score.player + 1 })
				break
			case "computer":
				setScore({ ...score, computer: score.computer + 1 })
				break
		}
	}

	const setWinnerStrike = (position: TLiningPos, lining: TLining) => {
		setPosition(position)
		setLining(lining)
	}

	const resetContext = () => {
		setPlayer("player")
		setScore({ player: 0, computer: 0 })
		setWinner(null)
		setPosition(null)
		setLining(null)
		setBoard(Array<TBoardItem>(9).fill(null))
	}

	const resetBoard = () => {
		setBoard(Array<TBoardItem>(9).fill(null))
	}

	const isBoardEmpty = (board: TBoard) => {
		const boardFull = board.every((cell) => cell === null)

		return boardFull
	}

	const isBoardFull = (board: TBoard) => {
		const boardFull = board.every((cell) => cell !== null)

		return boardFull
	}

	const isBoardTerminal = (board: TBoard) => {
		if (isBoardEmpty(board)) return false

		/**
		 * Checking row winning conditions
		 */
		if (board[0] && board[0] === board[1] && board[0] === board[2]) {
			return { winner: board[0] }
		}
		if (board[3] && board[3] === board[4] && board[3] === board[5]) {
			return { winner: board[3] }
		}
		if (board[6] && board[6] === board[7] && board[6] === board[8]) {
			return { winner: board[6] }
		}

		/**
		 * Checking column winning conditions
		 */
		if (board[0] && board[0] === board[3] && board[0] === board[6]) {
			return { winner: board[0] }
		}
		if (board[1] && board[1] === board[4] && board[1] === board[7]) {
			return { winner: board[1] }
		}
		if (board[2] && board[2] === board[5] && board[2] === board[8]) {
			return { winner: board[2] }
		}

		/**
		 * Checking diagonal winning conditions
		 */
		if (board[0] && board[0] === board[4] && board[0] === board[8]) {
			return { winner: board[0] }
		}
		if (board[2] && board[2] === board[4] && board[2] === board[6]) {
			return { winner: board[2] }
		}

		if (isBoardFull(board)) return true

		return false
	}

	const getAvailableMoves = (board: TBoard) => {
		const availableMoves: TAvailableMoves = []

		board.forEach((cell, index) => {
			if (cell === null) {
				availableMoves.push(index as TGridPos)
			}
		})

		return availableMoves
	}

	let ctx: IGameContext = {
		state: {
			playerName: playerName,
			currentPlayer: player,
			board: board,
			score: {
				player: score.player,
				computer: score.computer
			},
			winner: winner,
			winnerStrike: {
				position: position,
				lining: lining
			}
		},
		functions: {
			updatePlayerName: setPlayerName,
			updateCurrentPlayer,
			updateBoard,
			updateScore,
			setBoard,
			setWinner,
			setWinnerStrike,
			resetContext,
			resetBoard,
			isBoardEmpty,
			isBoardFull,
			isBoardTerminal,
			getAvailableMoves
		}
	}

	return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>
}

export { GameProvider, GameContext }
