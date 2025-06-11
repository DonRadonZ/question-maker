import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-brand-400);
    padding: 1.5rem 2rem;
`


function Header() {
    return (
        <StyledHeader>
            <h1>Question Maker</h1>
        </StyledHeader>
    )
}

export default Header