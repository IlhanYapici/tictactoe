import {
	IGameContext,
	TBoard
} from "../../context/GameContext/GameContext-types"

function checkBoardState(ctx: IGameContext) {
	const {
		state: { board, currentPlayer, score },
		functions: { updateCurrentPlayer, setWinner, updateScore }
	} = ctx

	if (checkRows(board) || checkColumns(board)) {
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

function checkDiag(board: TBoard) {}

export { checkBoardState }
