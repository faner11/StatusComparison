import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        value: 0
    },
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.value + action.payload
        }
    }
})
export const { setCount } = aboutSlice.actions

export default aboutSlice
