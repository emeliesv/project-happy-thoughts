import React, { useState } from 'react'

import { Error } from './Error.js'

import './input.css'

export const Input = ({ onMessageChange, inputType }) => {
    const [newMessage, setNewMessage] = useState('')
    const [error, setError] = useState('')

    /* This function checks if the inputmessage contains less than 5 characters
    or more than 140 characters. If so an errormessage is shown. */
    const checkIfMessageLengthValid = (input) => {
        if (input.length <5) {
            setError('Enter a thought longer than 5 characters please!')
            return false
        } else if (input.length >140) {
            setError('Enter a thought shorter than 140 characters please')
            return false
        } 
        setError('')
        return true
    }

    const handleSubmit = event => {
        event.preventDefault();
        checkIfMessageLengthValid(newMessage) && onMessageChange(newMessage);
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="input__input-container">
        <label className="input__user-input">
            <input 
            type={inputType}
            value={newMessage}
            onChange={event => setNewMessage(event.target.value)}/>
        </label>
        <Error message={error}/>
        <button type={'submit'}>Send thought!</button>
        </form>
        </>
    )
}