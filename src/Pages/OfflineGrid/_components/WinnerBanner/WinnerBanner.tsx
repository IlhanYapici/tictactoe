import { Box, Text, useColorMode } from '@chakra-ui/react'
import { useContext } from 'react'
import { GameContext } from '../../../../context/GameContext/GameContext'

function WinnerBanner() {
	const { colorMode } = useColorMode()
	const {
		state: { players, winner }
	} = useContext(GameContext)

	const getWinner = () => {
		switch (winner) {
			case 1:
				return (
					<Text
						fontSize="3rem"
						fontWeight="bold"
						color={colorMode === 'light' ? '#ffffff' : '#1a202c'}
					>
						{players.player1}
						<br />
						wins!
					</Text>
				)
			case 2:
				return (
					<Text
						fontSize="3rem"
						fontWeight="bold"
						color={colorMode === 'light' ? '#ffffff' : '#1a202c'}
					>
						{players.player2}
						<br />
						wins!
					</Text>
				)
			case null:
				return <></>
		}
	}

	return winner !== null ? (
		<Box
			zIndex={10}
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="absolute"
			w="100%"
			h="150px"
			backgroundColor={colorMode === 'light' ? '#1a202c' : '#ffffff'}
		>
			{getWinner()}
		</Box>
	) : null
}

export { WinnerBanner }
