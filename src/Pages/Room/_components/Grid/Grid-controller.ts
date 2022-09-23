import {
	IGameContext,
	TGridPos
} from "../../../../context/GameContext/GameContext-types"

function checkBoardState(ctx: IGameContext) {
	const {
		functions: { updateCurrentPlayer }
	} = ctx

	if (checkRows(ctx) || checkColumns(ctx) || checkDiags(ctx)) {
		return
	} else {
		updateCurrentPlayer()
	}
}

function checkColumns(ctx: IGameContext) {
	const {
		state: { board, currentPlayer },
		functions: { setWinner, updateScore, setWinnerStrike }
	} = ctx

	for (let i = 0; i < 3; i++) {
		let samePlayer: boolean = true

		for (let j = 1; j < 3; j++) {
			if (board[j][i] === null || board[j][i] !== board[j - 1][i]) {
				samePlayer = false
			}
		}

		if (samePlayer) {
			setWinner(currentPlayer)
			updateScore(currentPlayer)
			setWinnerStrike("column", i as TGridPos)

			return true
		}
	}

	return false
}

function checkRows(ctx: IGameContext) {
	const {
		state: { board, currentPlayer },
		functions: { setWinner, updateScore, setWinnerStrike }
	} = ctx

	for (let i = 0; i < 3; i++) {
		let samePlayer: boolean = true

		for (let j = 1; j < 3; j++) {
			if (board[i][j] === null || board[i][j] !== board[i][j - 1]) {
				samePlayer = false
			}
		}

		if (samePlayer) {
			setWinner(currentPlayer)
			updateScore(currentPlayer)
			setWinnerStrike("row", i as TGridPos)

			return true
		}
	}

	return false
}

function checkDiags(ctx: IGameContext) {
	const {
		state: { board, currentPlayer },
		functions: { setWinner, updateScore, setWinnerStrike }
	} = ctx

	let diag1: boolean = false
	let diag2: boolean = false

	if (
		board[0][0] !== null &&
		board[0][0] === board[1][1] &&
		board[1][1] === board[2][2]
	) {
		diag1 = true
		setWinner(currentPlayer)
		updateScore(currentPlayer)
		setWinnerStrike("diagonal", "topLeftBottomRight")
	}

	if (
		board[2][0] !== null &&
		board[2][0] === board[1][1] &&
		board[2][0] === board[0][2]
	) {
		diag2 = true

		setWinner(currentPlayer)
		updateScore(currentPlayer)
		setWinnerStrike("diagonal", "bottomLeftTopRight")
	}

	return diag1 === true || diag2 === true
}

export { checkBoardState }
