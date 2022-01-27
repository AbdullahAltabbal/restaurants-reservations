import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CustomerState {
    value: Customer[]
}

interface Customer {
    id: string;
    name: string;
    orders: string[]
}

const initialState: CustomerState = {
    value: []
}

interface AddOrders {
    order: string,
    id: string
}


export const CustomersSlice = createSlice({
    name: "Customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addOrders: (state, action: PayloadAction<AddOrders>) => {
            state.value.forEach(Customer => {
                if (Customer.id === action.payload.id) {
                    Customer.orders.push(action.payload.order)
                }
            });
        }
    }
})


export const { addCustomer, addOrders } = CustomersSlice.actions


export default CustomersSlice.reducer