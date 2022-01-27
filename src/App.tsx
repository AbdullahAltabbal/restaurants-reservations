import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { CustomerCard } from "./components/CustomerCard";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/resiervierungSlice";

function App() {
  const reservation = useSelector((state: RootState) => state.resiervierung.value)
  const customers = useSelector((state: RootState) => state.customer.value)
  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");

  const handelAddReservation = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");

  }


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => {
                return <ReservationCard name={name} index={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handelAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return <CustomerCard id={customer.id} orders={customer.orders} name={customer.name} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;