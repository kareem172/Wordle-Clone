import { configureStore } from '@reduxjs/toolkit'
import wordleSlice from './features/wordleSlice';

export default configureStore({
  reducer: wordleSlice
})

export type RootState = ReturnType<typeof wordleSlice>;