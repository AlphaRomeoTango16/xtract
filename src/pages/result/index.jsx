import styled from 'styled-components'

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
    color: white;
    margin: 10px
`

function Result() {
    
    const fName = localStorage.getItem('firstName')
    const lName = localStorage.getItem('lastName')

    return (
        <ResultContainer>
            <ResultWrapper>
                <ResultFirstName>Votre prénom est : {fName}</ResultFirstName>
                <ResultLastName>Votre nom est : {lName}</ResultLastName>
                {/* <ResultPhone>Votre portable est : {phoneNumber}</ResultPhone>
                <ResultEmail>Votre email est : {emailAddress}</ResultEmail> */}
                <ClearButton>Revenir au formulaire</ClearButton>
            </ResultWrapper>
        </ResultContainer>
    )
}

export default Result