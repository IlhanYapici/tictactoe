import {
	IGameContext,
	TBoard,
	TGridPos
} from "../../../../context/GameContext/GameContext-types"

export function handleClick(
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	index: TGridPos,
	ctx: IGameContext,
	getBestMove: (
		board: TBoard,
		depth: number,
		maximizing: boolean,
		callback?: (value: any) => void
	) => number
) {
	e.preventDefault()
	const {
		state: { board },
		functions: {
			setBoard,
			setWinner,
			updateScore,
			updateCurrentPlayer,
			isBoardTerminal,
			isBoardFull,
			resetBoard
		}
	} = ctx

	if (
		isBoardTerminal(board).winner === "player" ||
		isBoardTerminal(board).winner === "computer" ||
		isBoardFull(board)
	) {
		resetBoard()
		return
	}

	if (board[index] !== null) return

	let newBoard = [...board]
	newBoard[index] = "player"

	setBoard(newBoard)

	if (isBoardTerminal(board).winner === "player") {
		console.log(isBoardTerminal(newBoard))
		setWinner("player")
		console.log("player wins")
		updateScore("player")
		return
	}

	updateCurrentPlayer("computer")

	let randomNumber = getBestMove(newBoard, 0, false)

	if (newBoard[randomNumber] === null) {
		newBoard[randomNumber] = "computer"
	}

	setBoard(newBoard)

	if (isBoardTerminal(newBoard).winner === "computer") {
		console.log(isBoardTerminal(newBoard))
		setWinner("computer")
		console.log("computer wins")
		updateScore("computer")
		return
	}

	updateCurrentPlayer("player")

	if (isBoardTerminal(newBoard).winner === "draw") return
}
