import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Progress } from "@chakra-ui/react"

export function RoomLayout() {
	const [isLoading, setIsloading] = useState<boolean>(true)

	useEffect(() => {
		const t = setTimeout(() => {
			setIsloading(false)
		}, 2000)

		return () => clearTimeout(t)
	}, [])

	return <>{isLoading ? <>toto</> : <Outlet />}</>
}
