import styled from "styled-components";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";
import { device } from "../theme";


const Container = styled.div`
    box-sizing: border-box;
    background-color: ${props => `${props.theme.colors.background.light}`};
    min-height:100vh;
`
const ContentAndDrawerWrapper = styled.div`
    box-sizing: border-box;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    @media ${device.md}{
        flex-direction: column;
    }
`


const MainContentWrapper = styled.div`
    padding:20px;
    box-sizing: border-box;
    flex-grow:1;
    height:100%;

`






const MainLayout = ({ children }) => {
    return <Container>
        <AppBar />
        <ContentAndDrawerWrapper>
            <Drawer>

            </Drawer>
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
        </ContentAndDrawerWrapper>
    </Container>
}

export default MainLayout;