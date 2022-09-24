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
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch"
import { GameContext } from "../../../../context/GameContext/GameContext"

function ScoreBoard() {
	const {
		state: { score, playerName }
	} = useContext(GameContext)

	return (
		<Box w="100%" position="absolute" top={0} left={0}>
			<Grid
				h="50px"
				gridTemplateColumns="75px 1fr 75px 1fr 75px"
				justifyItems="center"
				alignItems="center"
				gap="1rem"
				fontSize="1.5rem"
				fontWeight="bold"
				borderBottom="0.2rem solid #3182ce"
			>
				<Menu />
				<Text>{playerName}</Text>

				<Box
					w="100%"
					h="100%"
					display="flex"
					flexDir="row"
					justifyContent="space-evenly"
					alignItems="center"
					backgroundColor="#3182ce"
					color="#fff"
				>
					<Text lineHeight={1} height="fit-content">
						{score.player}
					</Text>
					-
					<Text lineHeight={1} height="fit-content">
						{score.computer}
					</Text>
				</Box>

				<Text>Computer</Text>
				<ThemeSwitch />
			</Grid>
		</Box>
	)
}

export { ScoreBoard }
