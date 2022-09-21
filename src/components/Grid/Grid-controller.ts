import {
	IGameContext,
	TBoard
} from "../../context/GameContext/GameContext-types"

function checkBoardState(ctx: IGameContext) {
	const {
		state: { board, currentPlayer, score },
		functions: { updateCurrentPlayer, setWinner, updateScore }
	} = ctx

	if (checkRows(board) || checkColumns(board) || checkDiags(board)) {
		updateScore(currentPlayer)
		setWinner(currentPlayer)
	} else {
		updateCurrentPlayer()
	}
}

function checkColumns(board: TBoard) {
	for (let i = 0; i < 3; i++) {
		let samePlayer: boolean = true

		for (let j = 1; j < 3; j++) {
			if (board[j][i] === null || board[j][i] !== board[j - 1][i]) {
				samePlayer = false
			}
		}

		if (samePlayer) return true
	}

	return false
}

function checkRows(board: TBoard) {
	for (let i = 0; i < 3; i++) {
		let samePlayer: boolean = true

		for (let j = 1; j < 3; j++) {
			if (board[i][j] === null || board[i][j] !== board[i][j - 1]) {
				samePlayer = false
			}
		}

		if (samePlayer) return true
	}

	return false
}

function checkDiags(board: TBoard) {
	let diag1: boolean = false
	let diag2: boolean = false

	if (
		board[0][0] !== null &&
		board[0][0] === board[1][1] &&
		board[1][1] === board[2][2]
	) {
		diag1 = true
	}

	if (
		board[2][0] !== null &&
		board[2][0] === board[1][1] &&
		board[2][0] === board[0][2]
	) {
		diag2 = true
	}

	return diag1 === true || diag2 === true
}

export { checkBoardState }
