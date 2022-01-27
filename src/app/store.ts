import { configureStore, Store } from '@reduxjs/toolkit'
import resiervierungReducer from '../features/resiervierungSlice'
import CustomersReducer from '../features/KundenSlice'



export const store = configureStore({
    reducer: {
        resiervierung: resiervierungReducer,
        customer: CustomersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch