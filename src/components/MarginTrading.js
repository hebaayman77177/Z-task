import styled from "styled-components";
import ExpandBox from "./ExpandBox";
import { MainLink } from "./Links";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Text } from "./general";
import { defaultTheme } from "../theme";
import CustomTable from "./CustomTable";
import BarChartIcon from '@mui/icons-material/BarChart';


const MarginHeaderTitle = () => {
    return <Box
        alignItems="center"
        color={defaultTheme.colors.text.regular}
    >
        <BarChartIcon />
        <Text ml="3px">Margin Trading</Text>
    </Box>
}

const MarginsHeaderRest = () => {
    return <Box >
        <Text ml="auto" color={defaultTheme.colors.text.regular} fontSize="14px">
            Total equity<br />
            <Text color={defaultTheme.colors.text.light} fontSize="16px">= 0 USD</Text>
        </Text>

    </Box >
}



const MarginTrading = () => {
    return <ExpandBox
        HeaderTitle={<MarginHeaderTitle />}
        HeaderRest={<MarginsHeaderRest />}
    >
        <CustomTable >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Account</TableCell>
                        <TableCell align="right">Equaty</TableCell>
                        <TableCell align="center">Open P/L</TableCell>
                        <TableCell align="center">Available Margin</TableCell>
                        <TableCell align="center">Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key="BitCoin"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            Margin BTC
                        </TableCell>
                        <TableCell align="right">0 BTC</TableCell>
                        <TableCell align="right">0 BTC</TableCell>
                        <TableCell align="right">0 %</TableCell>
                        <TableCell align="right"> _ &nbsp;
                            <Button
                                bg={defaultTheme.colors.primary.main}
                                border="none"
                                color={defaultTheme.colors.text.light}
                                mr="20px"
                            >Deposit</Button>
                            <Button
                                bg="transparent"
                                borderColor="defaultTheme.colors.text.light"
                                color={defaultTheme.colors.text.light}
                            >Exchange</Button>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </CustomTable>
    </ExpandBox>
}

export default MarginTrading