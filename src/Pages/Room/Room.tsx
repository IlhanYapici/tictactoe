import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { WinnerBanner } from '../../components/WinnerBanner/WinnerBanner'
import { ScoreBoard } from '../../components/ScoreBoard/ScoreBoard'
import { GridContainer } from '../../components/Grid/Grid'

export function Room() {
	const { roomId } = useParams()

	return roomId === 'offline' ? (
		<>
			<WinnerBanner />
			<ScoreBoard />
			<GridContainer />
		</>
	) : null
}
