import { useState, useContext } from "react"
import { GridItem, Box } from "@chakra-ui/react"

import { ITileProps } from "./Tile-types"
import { useDataId, usePlayerIcon } from "./Tile-controller"
import { GameContext } from "../../../../context/GameContext/GameContext"

import "./Tile-styles.css"

function Tile({ dataId, ...props }: ITileProps) {
	const [clicked, setClicked] = useState<boolean>(false)
	const [icon, setIcon] = useState<JSX.Element | null>(null)
	const {
		state: { currentPlayer, board, winner },
		functions: { updateBoard }
	} = useContext(GameContext)
	const [row, column] = useDataId(dataId)

	const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault()

		if (clicked === true || winner !== null) {
			return
		}

		updateBoard(currentPlayer, row, column)
		setIcon(usePlayerIcon(dataId, board))

		setClicked(true)
	}

	let classNames =
		"grid-tile " +
		(clicked || winner !== null ? "disabled-tile" : "enabled-tile")

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
