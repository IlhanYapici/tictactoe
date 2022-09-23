import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { WinnerBanner } from './_components/WinnerBanner/WinnerBanner'
import { ScoreBoard } from './_components/ScoreBoard/ScoreBoard'
import { GridContainer } from './_components/Grid/Grid'

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
