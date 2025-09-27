import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    theme: modeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch