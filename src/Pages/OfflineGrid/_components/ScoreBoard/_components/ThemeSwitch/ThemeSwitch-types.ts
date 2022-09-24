interface IAnimation {
	sun: "" | TClassName
	moon: "" | TClassName
}

type TClassName = "onEntranceSun" | "onEntranceMoon" | "onExit"

export type { IAnimation }
