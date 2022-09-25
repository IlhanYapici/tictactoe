import { TGetBestMove } from "../../../../../../context/AiContext/AiContext-types"
import {
	IGameContext,
	TGridPos
} from "../../../../../../context/GameContext/GameContext-types"

export type THandleClick = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	index: TGridPos,
	ctx: IGameContext,
	getBestMove: TGetBestMove
) => void

export interface ITileProps {
	key: string
	dataId: TDataId
	handleClick: THandleClick
}

export type TDataId = `index:${TGridPos}`
