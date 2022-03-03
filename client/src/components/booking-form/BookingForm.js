import React from 'react'
import './bookingForm.css'

const BookingForm = () => {
    return (
        <div className="booking-form">
            <form> 
                <div className="form-items">
                    <label className="labels"> Full Name </label>
                    <input type="text" className="inputs" placeholder="Full Name" />
                </div>

                {/* <div className="form-items">
                    <label className="labels"> Age </label>
                    <input type="number" className="inputs" />
                </div> */}

                <div className="form-items">
                    <label className="labels"> Preffered Artist </label>
                    <select className="artist-select">
                        <option> Select an Artist </option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default BookingForm