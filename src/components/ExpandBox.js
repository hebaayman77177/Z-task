import styled from "styled-components";
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { defaultTheme } from "../theme";
import { Box } from "./general";


const ExpandBoxWrapper = styled.div`
    box-sizing: border-box;
    background-color:${props => `${props.theme.colors.background.main}`};
    border-radius:10px;
    padding:${props => `${props.isExpanded ? "20px" : "0"}`} ;
`
const ExpandBoxHeader = styled.div`
    box-sizing: border-box;
    height:76px;
    padding:20px;
    display:flex;
    align-items: center;
    width:100%;
`
const HeaderRestWrapper = styled.div`
    box-sizing: border-box;
    flex-grow:1;
`
const ExpandBoxBody = styled.div`
box-sizing: border-box;
width:100%;
display:${props => `${props.isExpanded ? "block" : "none"}`}
`

const ExpandButton = ({ isExpanded, toggleHandler }) => {
    return <Box onClick={toggleHandler} color={defaultTheme.colors.text.regular} style={{ cursor: "pointer" }}>
        {isExpanded ? <KeyboardArrowUpIcon color={defaultTheme.colors.text.regular} /> : <KeyboardArrowDownIcon />}
    </Box>
}

const ExpandBox = ({ HeaderTitle, HeaderRest, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleHandler = () => {
        setIsExpanded(!isExpanded)
    }
    return <ExpandBoxWrapper isExpanded={isExpanded}>
        <ExpandBoxHeader>
            {HeaderTitle}
            <ExpandButton isExpanded={isExpanded} toggleHandler={toggleHandler} />
            <HeaderRestWrapper>
                {HeaderRest}
            </HeaderRestWrapper>
        </ExpandBoxHeader>
        <ExpandBoxBody isExpanded={isExpanded}>
            {children}
        </ExpandBoxBody>
    </ExpandBoxWrapper>
}

export default ExpandBox