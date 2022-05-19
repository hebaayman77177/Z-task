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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



const WalletsHeaderTitle = () => {
    return <Box
        alignItems="center"
        color={defaultTheme.colors.text.regular}
    >
        <AccountBalanceWalletIcon />
        <Text ml="3px">Wallets</Text>
    </Box>
}

const WalletsHeaderRest = () => {
    return <Box >
        <Text ml="auto" color={defaultTheme.colors.text.regular} fontSize="14px">
            Total equity<br />
            <Text color={defaultTheme.colors.text.light} fontSize="16px">= 0 USD</Text>
        </Text>

    </Box >
}



const Wallets = () => {
    return <ExpandBox
        HeaderTitle={<WalletsHeaderTitle />}
        HeaderRest={<WalletsHeaderRest />}
    >
        <CustomTable >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell align="right">Palance</TableCell>
                        <TableCell align="center">Pending</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key="BitCoin"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            BitCoin
                        </TableCell>
                        <TableCell align="right">0 BTC</TableCell>
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
                            >Withdrow</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        key="BitCoin"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            BitCoin
                        </TableCell>
                        <TableCell align="right">0 BTC</TableCell>
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
                            >Withdrow</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        key="BitCoin"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            BitCoin
                        </TableCell>
                        <TableCell align="right">0 BTC</TableCell>
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
                            >Withdrow</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CustomTable>
    </ExpandBox>
}

export default Wallets