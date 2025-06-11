import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-gray-50);
    padding: 4rem 4.8rem 3.2rem;
`;

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;


function AppLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout