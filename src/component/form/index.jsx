import styled from 'styled-components'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 0;
    background-color: #76857d;
    width: 300px;
    height: 350px;
`

const FormTitle = styled.h1`
    font-family: 'Quicksand', sans serif;
    color: white;
    font-size: 20px;
`

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LabelFirstName = styled.label`
`

const InputFirstName = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Quicksand', sans serif;
    margin: 10px;
`

const LabelLastName = styled.label`
`

const InputLastName = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Quicksand', sans serif;
    margin: 10px;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LabelPhone = styled.label`
`

const InputPhone = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Quicksand', sans serif;
    margin: 10px;
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Quicksand', sans serif;
    margin: 10px;
`

const InputButton = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Quicksand', sans serif;
    font-weight: bold;
    margin: 10px;
    border-radius: 5px;
    :hover {
        background-color: black;
        color: white;
    }
`

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')

    const handleFirstNameChange = event => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value)
    }

    const handlePhoneNumberChange = event => {
        setPhoneNumber(event.target.value)
    }

    const handleEmailAddressChange = event => {
        setEmailAddress(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('phoneNumber', phoneNumber)
        localStorage.setItem('emailAddress', emailAddress)
        window.location.href="http://localhost:3000/result";
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Formulaire d'inscription</FormTitle>
            <InformationContainer>
                <LabelFirstName htmlFor="firstname"/>
                <InputFirstName type="text" name="firstname" onChange={handleFirstNameChange} value={firstName} placeholder="Votre prénom" required/>
                <LabelLastName htmlFor="lastname"/>
                <InputLastName type="text" name="lastname" onChange={handleLastNameChange} value={lastName} placeholder="Votre nom" required/>
            </InformationContainer>
            <ContactContainer>
                <LabelPhone htmlFor="phone"/>
                <InputPhone type="number" name="phone" onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Votre portable"/>
                <LabelEmail htmlFor="email"/>
                <InputEmail type="email" name="email" onChange={handleEmailAddressChange} value={emailAddress} placeholder="Votre e-mail" required/>
            </ContactContainer>
            <InputButton type="submit" value="S'inscrire"></InputButton>
        </FormContainer>
    )
}

export default Form