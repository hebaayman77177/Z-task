import styled from "styled-components";
import { defaultTheme } from "../theme";

const CoinHeaderWrapper = styled.div`
height:100%;
width:${props => `${props.theme.drawer.width.diff}`};
border:${props => `${props.theme.border.main}`};
`

const CoinHeader = () => {
    return <CoinHeaderWrapper>
        Test
    </CoinHeaderWrapper>
}

export default CoinHeader