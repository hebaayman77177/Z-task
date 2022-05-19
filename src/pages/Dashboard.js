import MarginTrading from "../components/MarginTrading"
import Wallets from "../components/Wallets"
import MainLayout from "../layouts/MainLayout"
import styled from "styled-components";


const DashBoardWrapper = styled.div`
    &>*{
        margin-bottom:10px;
    }
`

const Dashboard = () => {
    return <MainLayout>
        <DashBoardWrapper>
            <Wallets />
            <MarginTrading />
        </DashBoardWrapper>
    </MainLayout>
}
export default Dashboard