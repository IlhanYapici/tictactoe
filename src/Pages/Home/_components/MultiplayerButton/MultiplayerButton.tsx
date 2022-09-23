import { useDisclosure, useColorMode, IconButton } from '@chakra-ui/react'
import {
	HiOutlineUsers as MultiplayerOutlineIcon,
	HiUsers as MultiplayerSolidIcon
} from 'react-icons/hi'

import { MultiplayerModal } from './_components/MultiplayerModal/MultiplayerModal'

export function MultiplayerButton() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode } = useColorMode()

	return (
		<>
			<IconButton
				aria-label="offline-mode-button"
				height="12.5rem"
				width="12.5rem"
				onClick={onOpen}
				fontSize="3rem"
				icon={
					colorMode === 'light' ? (
						<MultiplayerOutlineIcon />
					) : (
						<MultiplayerSolidIcon />
					)
				}
			/>

			<MultiplayerModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}
