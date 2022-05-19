import styled from "styled-components";
import { defaultTheme } from "../theme";
import CoinHeader from "./CoinHeader";
import { Box } from "./general";
import Logo from "./Logo";
import MainLinks from "./MainLinks";

const AppBarWrapper = styled.div`
    box-sizing: border-box;
    background-color: ${props => `${props.theme.colors.background.main}`};
    height:${props => `${props.theme.appBar.height}`};
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`


const AppBar = () => {
    return <AppBarWrapper>
        <Box height="100%" width={defaultTheme.drawer.width.small} alignItems="center" justifyContent="center" border={`1px solid ${defaultTheme.colors.background.light}`}>
            <Logo />
        </Box>
        <CoinHeader />
        <MainLinks />
    </AppBarWrapper>
}
export default AppBar;