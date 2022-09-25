import { createContext, useState, useContext } from "react"

import { TBoard } from "../GameContext/GameContext-types"
import { IAiContext, IAiProviderProps, TGetBestMove } from "./AiContext-types"
import { GameContext } from "../GameContext/GameContext"

export const AiContext = createContext({} as IAiContext)

export function AiProvider({ children }: IAiProviderProps) {
	const {
		functions: { isBoardTerminal, getAvailableMoves }
	} = useContext(GameContext)
	const [nodesMap, setNodesMap] = useState<any>({})
	const [maxDepth, setMaxDepth] = useState<number>(-1)

	const getBestMove: TGetBestMove = (
		board: TBoard,
		depth: number,
		maximizing: boolean,
		callback?: (value: any) => void
	): any => {
		if (depth === 0) setNodesMap({})

		if (isBoardTerminal(board) || depth === -1) {
			if (isBoardTerminal(board).winner === "player") {
				return 100 - depth
			} else if (isBoardTerminal(board).winner === "computer") {
				return -100 + depth
			}

			return 0
		}

		if (maximizing) {
			let best = -100

			getAvailableMoves(board).forEach((index) => {
				let child = [...board]
				child[index] = "player"

				let score = getBestMove(child, depth + 1, false, callback) as number
				best = Math.max(best, score)
			})

			return best
		}

		if (!maximizing) {
			let best = 100

			getAvailableMoves(board).forEach((index) => {
				let child = [...board]
				child[index] = "computer"

				let score = getBestMove(child, depth + 1, true, callback) as number
				best = Math.min(best, score)

				if (depth === 0) {
					console.log(nodesMap)
					const moves = nodesMap[score] ? `${nodesMap[score]},${index}` : index
					nodesMap[score] = moves
				}
			})

			if (depth === 0) {
				let returnValue

				if (typeof nodesMap[best] === "string") {
					const arr = nodesMap[best].split(",")
					const rand = Math.floor(Math.random() * arr.length)

					returnValue = arr[rand]
				} else {
					returnValue = nodesMap[best]
				}

				if (callback) callback(returnValue)
				return returnValue
			}

			return best
		}
	}

	const ctx: IAiContext = {
		state: {
			maxDepth,
			nodesMap
		},
		functions: {
			getBestMove,
			setMaxDepth
		}
	}

	return <AiContext.Provider value={ctx}>{children}</AiContext.Provider>
}
