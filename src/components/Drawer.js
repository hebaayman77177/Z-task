import { useState } from "react";
import styled from "styled-components";
import { defaultTheme, device } from "../theme";
import { Box, Text } from "./general";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

const DrawerWrapper = styled.div`
    height: calc(100vh - ${props => `${props.theme.appBar.height}`});
    width:${props => `${props.isOpen ? props.theme.drawer.width.large : props.theme.drawer.width.small}`};
    background-color:  ${props => `${props.theme.colors.background.main}`};
    display:flex;
    flex-direction: column;
    background-color:${props => `${props.theme.colors.background.main}`};
    /* align-items: center; */
    .drawer-link{
        padding:16px 20px;
        font-size:14px;
        cursor:pointer;
        color:${props => `${props.theme.colors.text.regular}`};
        :hover{
            color:${props => `${props.theme.colors.primary.main}`};
        }
    }
    .drawer-link-text{
            display:${props => `${props.isOpen ? "inline-block" : "none"}`};
            margin-left:4px;
        }
    @media ${device.md}{
        width:100%;
        flex-direction: row;
        height:36px;
        .drawer-link-icon{
            display:none
        }
        .drawer-expand-controller{
            display:none;
        }
        .drawer-link{
            border-bottom:1px solid ${props => `${props.theme.colors.background.main}`};
            :hover{
            border-color: ${props => `${props.theme.colors.primary.main}`};
             }
        }
       
    }
`;
const LiftRightExpandButton = ({ isOpened, toggleHandler }) => {
    return <Box onClick={toggleHandler} className="drawer-link drawer-expand-controller" color={defaultTheme.colors.text.regular} style={{ cursor: "pointer" }}>
        {isOpened ?
            <Box alignItems="center">
                <ArrowBackIosIcon /> <Text className="drawer-link-text">Hide menu</Text>
            </Box>
            : <Text>
                <ArrowForwardIosIcon />
            </Text>
        }
    </Box >
}

const drawerLinksConfig = [
    {
        name: "Dashboard",
        path: "main",
        icon: <DashboardIcon />
    },
    {
        name: "Buy Crypto",
        path: "main",
        icon: <DashboardIcon />
    },
    {
        name: "Refferal",
        path: "main",
        icon: <DashboardIcon />
    },
    {
        name: "Reports",
        path: "main",
        icon: <DashboardIcon />
    },
    {
        name: "Setting",
        path: "setting",
        icon: <SettingsIcon />
    },
]


const Drawer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return <DrawerWrapper isOpen={isOpen}>
        <Box height="35px" className="drawer-expand-controller" color={defaultTheme.colors.background.main}>separetior</Box>
        {drawerLinksConfig.map((link => {
            return <Box alignItems="center" className="drawer-link">
                <Text className="drawer-link-icon">{link.icon}</Text>
                <Text className="drawer-link-text">{link.name}</Text>
            </Box>
        }))}

        <Box mt="auto">
            <LiftRightExpandButton isOpened={isOpen} toggleHandler={toggleHandler} />
        </Box>
    </DrawerWrapper>
}

export default Drawer;