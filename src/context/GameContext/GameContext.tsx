import { createContext, useState } from "react"

import {
	IGameProviderProps,
	IGameContext,
	IScore,
	TPlayer,
	TBoard,
	TGridPos,
	TLiningPos,
	TLining
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
	const [board, setBoard] = useState<TBoard>([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	])

	const isBoardFull = () => {
		const boardFull = board.every((row) => row.every((cell) => cell !== null))

		return boardFull
	}

	const updateCurrentPlayer = () => {
		if (player === "player") {
			setPlayer("computer")
		} else {
			setPlayer("player")
		}
	}

	const updateBoard = (player: TPlayer, row: TGridPos, column: TGridPos) => {
		let cp = [...board] as TBoard

		cp[row][column] = player

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
		setBoard([
			[null, null, null],
			[null, null, null],
			[null, null, null]
		])
	}

	const resetBoard = () => {
		setBoard([
			[null, null, null],
			[null, null, null],
			[null, null, null]
		])
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
			setWinner,
			setWinnerStrike,
			resetContext,
			resetBoard,
			isBoardFull
		}
	}

	return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>
}

export { GameProvider, GameContext }
