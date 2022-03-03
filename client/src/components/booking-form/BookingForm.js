import React, { useState } from 'react'
import './bookingForm.css'

const BookingForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [artist, setArtist] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [tattooLocation, setTattooLocation] = useState('')
    const [tattooDescription, setTattooDescription] = useState('')


    const capitalLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    const handlePhoneInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setPhone(formattedPhoneNumber)
    }

    const formatPhoneNumber = (value) => {
        if (!value) return value
      
        const phoneNumber = value.replace(/[^\d]/g, '')
      
        const phoneNumberLength = phoneNumber.length
        if (phoneNumberLength < 4) return phoneNumber
      
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }
      
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`
    }

    return (
        <div className="booking-form">
            <form> 
                <div className="form-items">
                    <label className="labels"> Full Name </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Email Address </label>
                    <input 
                        type="email" 
                        className="inputs" 
                        placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Phone Number </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Phone Number" 
                        onChange={(e) => handlePhoneInput(e)}
                        value={phone} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Date of Birth </label>
                    <input 
                        type="date"
                        className="date-input"
                        onChange={(e) => setBirthDate(e.target.value)}
                        value={birthDate} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Artist </label>
                    <select className="artist-select"
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}>
                        <option> Choose an Artist </option>
                        <option> Dan Smith </option>
                        <option> Dana Johnson </option>
                        <option> Mark Williams </option>
                    </select>
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Location </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Tattoo Location"
                        onChange={(e) => setTattooLocation(e.target.value)}
                        value={tattooLocation} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Description </label>
                    <textarea 
                        className="textarea" 
                        placeholder="Detailed Tattoo Description"
                        onChange={(e) => setTattooLocation(e.target.value)}
                        value={tattooLocation} 
                    />
                </div>

                <div className="form-items">
                    <label className="labels"> Reference Photo </label>
                    <input 
                        type="file"
                        className="file-input" 
                        placeholder="Detailed Tattoo Description"
                        onChange={(e) => setTattooLocation(e.target.value)}
                        value={tattooLocation} 
                    />
                </div>

                <div className="form-items">
                    <button type="submit" className="submit-btn"> Submit </button>
                </div>

            </form>
        </div>
    )
}

export default BookingForm