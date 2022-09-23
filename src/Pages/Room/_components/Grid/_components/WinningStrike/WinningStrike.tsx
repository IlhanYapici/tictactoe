import { Box } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"

import { IBoxStyling } from "./WinningStrike-types"
import { GameContext } from "../../../../context/GameContext/GameContext"

function WinningStrike() {
	const [boxStyling, setBoxStyling] = useState<string>("")
	const {
		state: { winner, winnerStrike }
	} = useContext(GameContext)

	const getPosition = () => {
		const { position, lining } = winnerStrike

		switch (position) {
			case "row":
				console.log({ position, lining })
				break
			case "column":
				if (lining === 0) {
					setBoxStyling("calc((12.6666667vh * 1) - 1vh)")
					break
				}
				if (lining === 1) {
					setBoxStyling("calc(((12.6666667vh * 3) - 1vh) + 2vh)")
					break
				}
				if (lining === 2) {
					setBoxStyling("calc(((12.6666667vh * 5) - 1vh) + 4vh)")
					break
				}
			case "diagonal":
				console.log({ position, lining })
				break
		}
	}

	useEffect(() => {
		getPosition()
	}, [winner, winnerStrike])

	return winner ? (
		<Box
			zIndex={3}
			position="absolute"
			backgroundColor="red"
			top="0"
			left={boxStyling} // Tile size = 25,33vh
			height="100%"
			width="2vh"
		></Box>
	) : null
}

export { WinningStrike }
