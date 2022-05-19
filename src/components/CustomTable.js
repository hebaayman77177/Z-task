
import styled from "styled-components";
import TableContainer from '@mui/material/TableContainer';

const CustomTable = styled(TableContainer)`
    &.MuiTableContainer-root {
        background-color:${props => `${props.theme.colors.background.main}`};
    }
    & .MuiTableHead-root{
        *{
            color:${props => `${props.theme.colors.text.regular}`};
            font-size:12px;
        }
    }
    & .MuiTableCell-head{
        padding:0 6px;
    }
    & .MuiTableBody-root{
        .MuiTableCell-root{
            padding:6px 3px;
            &,*{
                color:${props => `${props.theme.colors.text.light}`};
                font-size:16px;
            }
            }
    }
`

export default CustomTable;