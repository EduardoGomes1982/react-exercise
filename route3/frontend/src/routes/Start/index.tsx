import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Start() {
    return(
        <>
            <Header />
            <Outlet />
        </>
    );
}