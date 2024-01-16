import { Outlet } from "react-router-dom";
import Content from "../Content";

const Layout = () => {
    return (
        <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Content>
                <Outlet/>
            </Content>
        </section>
    )
}

export default Layout;