import React, { useState } from "react"
import { useDispatch, useStore } from "react-redux"
import { addOrders } from '../features/KundenSlice'


interface customerCardProps {
    id: string,
    name: string,
    orders: string[]
}

export const CustomerCard = ({ id, name, orders }: customerCardProps) => {
    const [ordersInput, setOrdersInput] = useState<string>("");
    const dispatch = useDispatch();
    return <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
            <div className="customer-food">{orders.map((order) => { return <p> {order} </p> })}</div>
            <div className="customer-food-input-container">
                <input value={ordersInput} onChange={(e) => setOrdersInput(e.target.value)} />
                <button onClick={() => {
                    dispatch(addOrders({
                        id,
                        order: ordersInput
                    }))
                    setOrdersInput('')
                }}>Add</button>
            </div>
        </div>
    </div>
}