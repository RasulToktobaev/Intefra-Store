import {Outlet} from "react-router-dom";
import {Header} from "../../components/header";


export function BaseLayout() {
    return <>
        <Header/>
        <Outlet/>
        FOOTER
    </>
}