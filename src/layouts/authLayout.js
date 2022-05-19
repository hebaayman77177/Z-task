import styled from "styled-components";
import { Box } from "../components/general";
import LogoExpanded from "../components/LogoExpanded";
import { device } from "../theme";
import TextField from '@mui/material/TextField';

const ContentWrapper = styled.div`
    box-sizing: border-box;
    width:100%;
    height:100%;
    background-image: url("https://primexbt.com/my/id-bg.b5174bd50bea8cea.jpg");
    background-size:cover;
    display:flex;
    flex-direction:column;
    background-color: #010306;
    min-height:100vh;
    min-width:100vw;
    padding-left:75px;
    & input:-webkit-autofill {
        -webkit-box-shadow:  0 0 0px 1000px #ececec inset;
        box-shadow:  0 0 0px 1000px #ececec inset;
        background-image:none;
    };

    @media ${device.md}{
        align-items:center;
        /* justify-content:center; */
        padding-left:0;
    };

`

const FormWrapper = styled.div`
    box-sizing: border-box;
    padding:24px 20px;
    border: 1px solid ${props => `${props.theme.colors.background.light}`};
    background-color:rgba(0, 0, 0, .63);
    width:368px;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    @media ${device.md}{
        background-color:transparent;
        border:none;
    }
`

export const AuthFormHeader = styled.h1`
    font-size: 16px;
    color:${props => `${props.theme.colors.text.light}`};
    font-weight:500;
    line-height: 1.5rem;
    margin:24px 0;
    @media ${device.md}{
        margin:0 0 16px;
    }
`

export const TheOtherAuthOption = styled.p`
    font-size: 14px;
    color:${props => `${props.theme.colors.text.regular}`};
    margin:20px 0;
    @media ${device.md}{
        margin:0 0 16px;
    }
`

export const TextInputField = styled(TextField)`
    & .MuiOutlinedInput-input{
      color: ${props => `${props.theme.colors.text.regular}`};
    }
    & .MuiInputLabel-root{
      color: ${props => `${props.theme.colors.text.regular}`};
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${props => `${props.theme.colors.text.regular}`};
    }
    
    & .MuiOutlinedInput-root:hover  {
        .MuiOutlinedInput-notchedOutline{
        border-color: ${props => `${props.theme.colors.text.light}`};
         border-width: 2px;
        }
    }
    & .Mui-focused.MuiInputLabel-root{
        color:${props => `${props.theme.colors.primary.main}`};
    }
    & .Mui-focused .MuiOutlinedInput-notchedOutline{
        border-color: ${props => `${props.theme.colors.primary.main} !important`};
         border-width: 2px;
    }
`

const AuthLayout = ({ children }) => {
    return <ContentWrapper>
        <Box margin={["25px 0 45px", "25px 0 90px", "50px 0 90px"]}>
            <LogoExpanded />
        </Box>
        <FormWrapper>
            {children}
        </FormWrapper>
    </ContentWrapper>
}

export default AuthLayout