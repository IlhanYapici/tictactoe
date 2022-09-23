interface ITileProps {
	key: string
	dataId: TDataId
}

type TDataId = `row${0 | 1 | 2}-col${0 | 1 | 2}`

export type { ITileProps, TDataId }
