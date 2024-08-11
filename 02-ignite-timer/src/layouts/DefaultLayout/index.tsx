import { Outlet } from "react-router-dom";
import { Header } from "../../compoments/Header";
import { LayoutContainer } from "./styles";


export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet></Outlet>
        </LayoutContainer>
    )
}