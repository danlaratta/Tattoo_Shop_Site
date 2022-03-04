import React, { useState } from 'react'
import './bookingForm.css'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const BookingForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [artist, setArtist] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [tattooLocation, setTattooLocation] = useState('')
    const [tattooDescription, setTattooDescription] = useState('')


    const capitalLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1)
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

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_muylzmp', 'template_sglc92o', e.target, 'NBj9MzKv3eg1Uitgs')
          .then((result) => {
              console.log(result.text)
              window.location.reload()
          }, (error) => {
              console.log(error.text)
          })

          e.target.reset()
      }

    const schema = yup.object().shape({
        name: yup.string()
            .required('Full Name is required'),

        email: yup.string()
            .email()
            .required('Email is required'),

        phone: yup.string()
            .required('Phone number is required'),

        birthdate: yup.date()
            .nullable()
            .required('Date of birth is required, must be 18+ years of age')
            .transform((curr, orig) => orig === '' ? null : curr),

        artist: yup.string()
            .ensure()
            .required('Artist is required'),

        location: yup.string()
            .required('Tattoo Location is required'),
        
        description: yup.string()
            .required('Tattoo Description is required'),

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <div className="booking-form">
            <h1 className="form-title"> Tattoo Request Form </h1>
            
            <form onSubmit={handleSubmit(sendEmail)}> 
                <div className="form-items">
                    <label className="labels"> Full Name </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        value={capitalLetter(name)} 
                        name="name"
                        { ...register('name')}
                    />

                    { errors.name && <p className="err-msg"> {errors.name.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Email Address </label>
                    <input 
                        type="email" 
                        className="inputs" 
                        placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={capitalLetter(email)}
                        name="email"
                        { ...register('email')}
                    />

                    { errors.email && <p className="err-msg"> {errors.email.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Phone Number </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Phone Number" 
                        onChange={(e) => handlePhoneInput(e)}
                        value={capitalLetter(phone)} 
                        name="phone"
                        { ...register('phone')}
                    />

                    { errors.phone && <p className="err-msg"> {errors.phone.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Date of Birth </label>
                    <input 
                        type="date"
                        className="date-input"
                        onChange={(e) => setBirthDate(e.target.value)}
                        value={birthDate} 
                        name="birthdate"
                        { ...register('birthdate')}
                    />

                    { errors.birthdate && <p className="err-msg"> {errors.birthdate.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Artist </label>
                    <select className="artist-select"
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                        name="artist"
                        { ...register('artist')}
                    >
                        <option value=""> Choose an Artist </option>
                        <option value="Dan Smith"> Dan Smith </option>
                        <option value="Dana Johnson"> Dana Johnson </option>
                        <option value="Mark Williams"> Mark Williams </option>
                    </select>

                    { errors.artist && <p className="err-msg"> {errors.artist.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Location </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Tattoo Location"
                        onChange={(e) => setTattooLocation(e.target.value)}
                        value={capitalLetter(tattooLocation)} 
                        name="location"
                        { ...register('location')}
                    />

                    { errors.location && <p className="err-msg"> {errors.location.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Description </label>
                    <textarea 
                        className="textarea" 
                        placeholder="Detailed Tattoo Description"
                        onChange={(e) => setTattooDescription(e.target.value)}
                        value={capitalLetter(tattooDescription)} 
                        name="description"
                        { ...register('description')}
                    />

                    { errors.description && <p className="err-msg"> {errors.description.message} </p> }
                </div>

                <div className="form-items">
                    <button type="submit" className="submit-btn"> Submit </button>
                </div>

            </form>
        </div>
    )
}

export default BookingForm