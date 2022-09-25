import { useState, useContext, useEffect } from "react"
import { GridItem, Box } from "@chakra-ui/react"

import { ITileProps } from "./Tile-types"
import { useDataId, usePlayerIcon } from "./Tile-utils"
import { GameContext } from "../../../../../../context/GameContext/GameContext"

import "./Tile-styles.css"
import { AiContext } from "../../../../../../context/AiContext/AiContext"

function Tile({ dataId, handleClick, ...props }: ITileProps) {
	const [clicked, setClicked] = useState<boolean>(false)
	const [icon, setIcon] = useState<JSX.Element | null>(null)
	const gameCtx = useContext(GameContext)
	const {
		functions: { getBestMove }
	} = useContext(AiContext)
	const {
		state: { currentPlayer, board, winner }
	} = gameCtx

	const index = useDataId(dataId)

	const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault()

		if (clicked) return

		handleClick(e, index, gameCtx, getBestMove)

		setClicked(true)
	}

	let classNames =
		"grid-tile " +
		(clicked || winner !== null || currentPlayer === "computer"
			? "disabled-tile"
			: "enabled-tile")

	useEffect(() => {
		if (icon === null) {
			const icon = usePlayerIcon(dataId, board)
			setIcon(icon)
			setClicked(icon !== null)
		}
	}, [board])

	return (
		<GridItem
			className={classNames}
			display="flex"
			justifyContent="center"
			alignItems="center"
			zIndex={2}
			w="100%"
			h="100%"
			borderRadius={6}
			onClick={onClick}
			data-id={dataId}
			{...props}
		>
			{icon}
		</GridItem>
	)
}

export { Tile }
