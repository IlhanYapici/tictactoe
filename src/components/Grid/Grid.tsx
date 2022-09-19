import { useEffect, useContext } from "react"
import { Grid } from "@chakra-ui/react"

import { checkBoardState } from "./Grid-controller"
import { Tile } from "./_components/Tile/Tile"
import { TDataId } from "./_components/Tile/Tile-types"
import { Background } from "./_components/Background/Background"
import { GameContext } from "../../context/GameContext/GameContext"

function GridContainer() {
	const ctx = useContext(GameContext)

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
		if (ctx.state.winner === null) {
			checkBoardState(ctx)
		}
	}, [ctx.state.board])

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
			{setupGrid()}
			<Background />
		</Grid>
	)
}

export { GridContainer }
