import { configureStore } from '@reduxjs/toolkit'
import maze from './sliceGame'

const store = configureStore({
    reducer: {maze},
    devTools: process.env.NODE_ENV !== 'production'
})

export default store