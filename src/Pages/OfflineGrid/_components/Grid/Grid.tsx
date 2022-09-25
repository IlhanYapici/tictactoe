import { useEffect, useContext } from "react"
import { Grid } from "@chakra-ui/react"

import { handleClick } from "./Grid-controller"
import { Tile } from "./_components/Tile/Tile"
import { TDataId } from "./_components/Tile/Tile-types"
import { Background } from "./_components/Background/Background"
import { GameContext } from "../../../../context/GameContext/GameContext"
import { WinningStrike } from "./_components/WinningStrike/WinningStrike"
import { TGridPos } from "../../../../context/GameContext/GameContext-types"

function GridContainer() {
	const {
		state: { board }
	} = useContext(GameContext)

	const setupGrid = () => {
		const grid = []

		for (let i = 0; i < 9; i++) {
			const dataId: TDataId = `index:${i as TGridPos}`
			grid.push(
				<Tile key={"gridItem" + i} dataId={dataId} handleClick={handleClick} />
			)
		}

		return grid
	}

	useEffect(() => {
		console.log(board)
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
			{/* <WinningStrike /> */}
			{setupGrid()}
			<Background />
		</Grid>
	)
}

export { GridContainer }
