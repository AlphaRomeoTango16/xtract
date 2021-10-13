import styled from 'styled-components'
import Form from '../../component/form'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

function Main() {
    return (
        <MainContainer>
            <Form />
        </MainContainer>
    )
}

export default Main