import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import { ActionTypes, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions"
interface CreateCycleData {
    task: string
    minutesAmount: number
}

interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCycle: () => void

}


export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}



export function CyclesContextProvider({
    children
}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer,

        {
            cycles: [],
            activeCycleId: null,
        },
        (initialState) => {
            const storedSateAsJSON = localStorage.getItem('@ignite-timer: cycles-state-1.0.0',)

            if (storedSateAsJSON) {
                return JSON.parse(storedSateAsJSON)
            }

            return initialState
        }
    )

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer: cycles-state-1.0.0', stateJSON)
    }, [cyclesState])

    const { cycles, activeCycleId } = cyclesState;

    const activeCycle = cycles.find((cycles) => cycles.id === activeCycleId)


    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch({
            type: ActionTypes.ADD_NEW_CYCLE,
            payload: {
                newCycle,
            }
        })
        setAmountSecondsPassed(0)
    }

    function interruptCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    return (

        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCycle,
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}