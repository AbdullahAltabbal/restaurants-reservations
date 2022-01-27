import React from "react"
import { useDispatch } from "react-redux"
import { removeReservation } from "../features/resiervierungSlice";
import { addCustomer } from '../features/KundenSlice'
import { v4 as uuid } from 'uuid'
import { Card, Icon } from 'semantic-ui-react'


interface ReservationCardProps {
    name: string;
    index: number
}

export const ReservationCard = ({ name, index }: ReservationCardProps) => {

    const dispatch = useDispatch();
    return <div onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id: uuid(),
            name: "test 2",
            orders: [],
        }))
    }} className="reservation-card-container">
        {name}
    </div>
}