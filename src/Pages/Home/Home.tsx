import { IconButton, Box, Text, useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
	HiOutlineUsers as MultiplayerOutlineIcon,
	HiUsers as MultiplayerSolidIcon,
	HiOutlineUser as OfflineOutlineIcon,
	HiUser as OfflineSolidIcon
} from 'react-icons/hi'

export function Home() {
	const { colorMode } = useColorMode()
	const navigate = useNavigate()
	return (
		<Box
			width="30vw"
			height="fit-content"
			display="flex"
			flexDir="row"
			justifyContent="space-evenly"
		>
			<IconButton
				aria-label="multiplayer-mode-button"
				height="12.5rem"
				width="12.5rem"
				onClick={() => navigate('')}
				fontSize="3rem"
				icon={
					colorMode === 'light' ? (
						<MultiplayerOutlineIcon />
					) : (
						<MultiplayerSolidIcon />
					)
				}
				disabled={!navigator.onLine}
			/>
			<IconButton
				aria-label="offline-mode-button"
				height="12.5rem"
				width="12.5rem"
				onClick={() => navigate('/room/offline')}
				fontSize="3rem"
				icon={
					colorMode === 'light' ? <OfflineOutlineIcon /> : <OfflineSolidIcon />
				}
			/>
		</Box>
	)
}
