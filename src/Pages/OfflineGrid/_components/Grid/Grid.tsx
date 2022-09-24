import { useEffect, useContext } from "react"
import { Grid } from "@chakra-ui/react"

import { checkBoardState } from "./Grid-controller"
import { Tile } from "./_components/Tile/Tile"
import { TDataId } from "./_components/Tile/Tile-types"
import { Background } from "./_components/Background/Background"
import { GameContext } from "../../../../context/GameContext/GameContext"
import { WinningStrike } from "./_components/WinningStrike/WinningStrike"

function GridContainer() {
	const ctx = useContext(GameContext)
	const {
		state: { winner, board }
	} = ctx

	const setupGrid = () => {
		const grid = []

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				const dataId = `row${i}-col${j}` as unknown as TDataId
				grid.push(<Tile key={"gridItem" + i + j} dataId={dataId} />)
			}
		}

		return grid
	}

	useEffect(() => {
		if (winner === null) {
			checkBoardState(ctx)
		}
	}, [board])

	return (
		<Grid
			position="relative"
			w={"80vh"}
			h={"80vh"}
			templateColumns="repeat(3, 1fr)"
			templateRows="repeat(3, 1fr)"
			placeItems="center"
			gap="2vh"
		>
			<WinningStrike />
			{setupGrid()}
			<Background />
		</Grid>
	)
}

export { GridContainer }
