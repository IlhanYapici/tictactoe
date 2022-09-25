import { BiCircle as CircleIcon } from "react-icons/bi"
import { GrClose as CrossIcon } from "react-icons/gr"

import { TDataId } from "./Tile-types"
import {
	TBoard,
	TGridPos
} from "../../../../../../context/GameContext/GameContext-types"

function useDataId(dataId: TDataId) {
	const index = dataId.split(":")[1]

	return index as unknown as TGridPos
}

function usePlayerIcon(dataId: TDataId, board: TBoard) {
	const index = useDataId(dataId)

	const player = board[index]

	switch (player) {
		case "player":
			return <CircleIcon className="circle-icon" />
		case "computer":
			return <CrossIcon className="cross-icon" />
		case null:
			return null
	}
}

export { useDataId, usePlayerIcon }
