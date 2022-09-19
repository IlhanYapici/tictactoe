import { createContext, useState } from "react"

import {
	IGameProviderProps,
	IGameContext,
	IScore,
	IPlayers,
	TPlayer,
	TBoard,
	TGridPos
} from "./GameContext-types"

const GameContext = createContext({} as IGameContext)

function GameProvider({ children }: IGameProviderProps) {
	const [players, setPlayers] = useState<IPlayers>({
		player1: "Player 1",
		player2: "Player 2"
	})

	/**
	 * Setting current player as 2 because useEffect in Grid component
	 * will trigger updateCurrentPlayer.
	 */
	const [player, setPlayer] = useState<TPlayer>(2)
	const [winner, setWinner] = useState<TPlayer | null>(null)
	const [score, setScore] = useState<IScore>({ player1: 0, player2: 0 })
	const [board, setBoard] = useState<TBoard>([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	])

	const updateCurrentPlayer = () => {
		if (player === 1) {
			setPlayer(2)
		} else {
			setPlayer(1)
		}
	}

	const updateBoard = (player: TPlayer, row: TGridPos, column: TGridPos) => {
		let cp = [...board] as TBoard

		cp[row][column] = player

		setBoard(cp)
	}

	const updateScore = (player: TPlayer) => {
		switch (player) {
			case 1:
				setScore({ ...score, player1: score.player1 + 1 })
				break
			case 2:
				setScore({ ...score, player2: score.player2 + 1 })
				break
		}
	}

	let ctx: IGameContext = {
		state: {
			players: players,
			currentPlayer: player,
			board: board,
			score: {
				player1: score.player1,
				player2: score.player2
			},
			winner: winner
		},
		//TODO: implement resetBoard and resetGame
		functions: {
			updatePlayers: setPlayers,
			updateCurrentPlayer,
			updateBoard,
			updateScore,
			setWinner
		}
	}

	return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>
}

export { GameProvider, GameContext }
