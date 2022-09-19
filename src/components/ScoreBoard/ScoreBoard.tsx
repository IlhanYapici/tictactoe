import { useContext } from "react"
import {
	Box,
	Grid,
	Editable,
	EditableInput,
	EditablePreview,
	Text
} from "@chakra-ui/react"

import { Menu } from "./_components/Menu/Menu"
import { GameContext } from "../../context/GameContext/GameContext"
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch"

function ScoreBoard() {
	const {
		state: { score, players }
	} = useContext(GameContext)

	return (
		<Box w="100%" position="absolute" top={0} left={0}>
			<Menu />
			<Grid
				h="50px"
				gridTemplateColumns="1fr 50px 1fr"
				justifyItems="center"
				alignItems="center"
				gap="1.5rem"
				fontSize="1.5rem"
				fontWeight="bold"
			>
				<Text>{players.player1}</Text>

				<Text lineHeight={1} height="fit-content">
					{score.player1} - {score.player2}
				</Text>

				<Text>{players.player2}</Text>
			</Grid>
			<ThemeSwitch />
		</Box>
	)
}

export { ScoreBoard }
