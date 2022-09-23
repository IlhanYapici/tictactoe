import { useDisclosure, useColorMode, IconButton } from '@chakra-ui/react'
import {
	HiOutlineUser as OfflineOutlineIcon,
	HiUser as OfflineSolidIcon
} from 'react-icons/hi'

import { OfflineModal } from './_components/OfflineModal/OfflineModal'

export function OfflineButton() {
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
					colorMode === 'light' ? <OfflineOutlineIcon /> : <OfflineSolidIcon />
				}
			/>

			<OfflineModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}
