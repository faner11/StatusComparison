import { createContext, Dispatch } from "react"

interface State {
    count: number
}
export interface InitContextProps {
    state: State
    setState: Dispatch<Partial<State>>
}
export const dataInit = {
    count: 0
}
export const reducer = (prevState: State, updatedProperty: Partial<State>): State => ({
    ...prevState,
    ...updatedProperty
})
const HomeContext = createContext<InitContextProps>({
    state: dataInit,
    setState: () => {
        throw new Error("HomeContext:超出 HomeContext.Provider 范围")
     }
})
export default HomeContext