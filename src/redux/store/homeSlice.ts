import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        value: 0
    },
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})
export const { setCount } = homeSlice.actions

export default homeSlice
