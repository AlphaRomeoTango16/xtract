import styled from 'styled-components'
import { useState, useEffect } from 'react'

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    margin: 0;
    background-color: #76857d;
    width: 300px;
    height: 250px;
`

const ResultFirstName = styled.div`
    color: white;
    margin: 10px
`

const ResultLastName = styled.div`
    color: white;
    margin: 10px
`

const ResultPhone= styled.div`
    color: white;
    margin: 10px
`

const ResultEmail = styled.div`
    color: white;
    margin: 10px
`

const ClearButton = styled.button`
    color: black;
    margin: 10px
`

function Result() {
    const [showPhone, setShowPhone] = useState(true)

    const fName = localStorage.getItem('firstName')
    const lName = localStorage.getItem('lastName')
    const pNumber = localStorage.getItem('phoneNumber')
    const eAddress = localStorage.getItem('emailAddress')

    function BackToForm() {
        localStorage.clear();
        window.location.href="http://localhost:3000/";
    }

    useEffect(() => {
        const phone = pNumber
        if(phone === "") {
            setShowPhone(false)
        }
    }, [pNumber])


    return (
        <ResultContainer>
            <ResultWrapper>
                <ResultFirstName>Votre prénom est {fName}</ResultFirstName>
                <ResultLastName>Votre nom est {lName}</ResultLastName>
                <ResultPhone style={{ display: showPhone ? "block" : "none"}}>Votre portable est {pNumber}</ResultPhone>
                <ResultEmail>Votre email est {eAddress}</ResultEmail>
                <ClearButton onClick={BackToForm}>Revenir au formulaire</ClearButton>
            </ResultWrapper>
        </ResultContainer>
    )
}

export default Result