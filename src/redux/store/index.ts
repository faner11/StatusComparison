import { configureStore } from '@reduxjs/toolkit'
import aboutSlice from './aboutSlice'
import homeSlice from './homeSlice'

const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        about: aboutSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store