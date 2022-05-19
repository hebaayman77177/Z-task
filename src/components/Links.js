
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { Text } from "./general";
import { device } from "../theme";

const LinkWrapper = styled.a`
    box-sizing: border-box;
    color:${props => `${props.isActive ? "#fff" : "#83838d"}`};
    font-size:14px;
    border-bottom:${props => `${props.isActive ? `3px solid ${props.theme.colors.text.light}` : 'none'}`};
    display:flex;
    flex-direction:row;
    align-items:center;
    text-decoration: none;
    font-weight: ${props => `${props.isActive ? "bold" : "normal"}`};
    height:100%;
    padding:0 12px;
    @media ${device.md}{
        svg{
        color:${props => `${props.isActive ? props.theme.colors.primary.main : "#83838d"}`};
        }
        border:none;
        flex-direction: column;
        justify-content: space-around;
    }
    
    `
export const MainLink = ({ currentPath }) => {
    return <LinkWrapper href="main" isActive={currentPath == "/main"} >
        <HomeIcon /> <Text>Home</Text>
    </LinkWrapper>
}

export const MarginLink = ({ currentPath }) => {
    return <LinkWrapper href="margin" isActive={currentPath == "/margin"} >
        <HomeIcon /> <Text>Margin</Text>
    </LinkWrapper>
}

export const BuyCryptoLink = ({ currentPath }) => {
    return <LinkWrapper href="buy-crypto" isActive={currentPath == "/buy-crypto"} >
        <HomeIcon /> <Text>BuyCrypto</Text>
    </LinkWrapper>
}

export const YieldLink = ({ currentPath }) => {
    return <LinkWrapper href="yield" isActive={currentPath == "/yield"} >
        <HomeIcon /> <Text>Yield</Text>
    </LinkWrapper>
}

