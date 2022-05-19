import styled from "styled-components";
import { device } from "../theme";
import { MainLink, YieldLink, BuyCryptoLink, MarginLink } from "./Links";
import { useLocation } from 'react-router-dom';

const MainLinksWraper = styled.div`
box-sizing: border-box;
display:flex;
align-items:center;
height:100%;

@media ${device.md}{
    background-color:${props => `${props.theme.colors.background.main}`};
    position:absolute;
    width:100vw;
    bottom:0;
    right:0;
    left:0;
    height:50px;
    justify-content:space-around;
  }
`


const MainLinks = () => {
    const { pathname } = useLocation()

    return <MainLinksWraper>
        <MainLink currentPath={pathname} />
        <MarginLink currentPath={pathname} />
        <BuyCryptoLink currentPath={pathname} />
        <YieldLink currentPath={pathname} />
    </MainLinksWraper>
}

export default MainLinks