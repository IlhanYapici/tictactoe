import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { IModalProps } from '../../../../_shared/Modal-types'

export function OfflineModal({ isOpen, onClose, ...props }: IModalProps) {
	const navigate = useNavigate()

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Offline mode</ModalHeader>
				<ModalCloseButton />
				<ModalBody></ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={() => navigate('/room/offline')}>Play</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
