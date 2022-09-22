import { Routes, Route } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

import { RoomLayout } from './Pages/Room/RoomLayout'
import { GameProvider } from './context/GameContext/GameContext'

import './App.css'
import { Room } from './Pages/Room/Room'
import { Home } from './Pages/Home/Home'

function App() {
	const toast = useToast()

	useEffect(() => {
		const t = setTimeout(() => {
			if (navigator.onLine) {
				toast({
					title: "You're connected!",
					description: 'You can play online against other players.',
					status: 'success',
					duration: 5000
				})
			} else {
				toast({
					title: 'No internet connexion x(',
					description: "You can't play online...",
					status: 'error',
					duration: 5000
				})
			}
		}, 150)

		return () => clearTimeout(t)
	}, [navigator.onLine])

	return (
		<GameProvider>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="room" element={<RoomLayout />}>
						<Route path=":roomId" element={<Room />} />
					</Route>
				</Route>
			</Routes>
		</GameProvider>
	)
}

export default App
