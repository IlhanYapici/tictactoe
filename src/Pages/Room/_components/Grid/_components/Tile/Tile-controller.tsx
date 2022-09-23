import { BiCircle as CircleIcon } from 'react-icons/bi'
import { GrClose as CrossIcon } from 'react-icons/gr'

import { TDataId } from './Tile-types'
import {
	TBoard,
	TGridPos
} from '../../../../../../context/GameContext/GameContext-types'

function useDataId(dataId: TDataId) {
	const pos = dataId
		.split('-')
		.join('')
		.replace(/\D/g, '')
		.split('') as unknown as [TGridPos, TGridPos]

	const row = pos[0]
	const column = pos[1]

	return [row, column]
}

function usePlayerIcon(dataId: TDataId, board: TBoard) {
	const [row, column] = useDataId(dataId)

	const player = board[row][column]

	switch (player) {
		case 1:
			return <CircleIcon className="circle-icon" />
		case 2:
			return <CrossIcon className="cross-icon" />
		case null:
			return null
	}
}

export { useDataId, usePlayerIcon }
