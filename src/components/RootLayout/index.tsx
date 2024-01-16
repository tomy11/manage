import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="c-app c-default-layout">
            sidbar
            <div className="c-wrapper">
                <header>header</header>
                <div className="c-body">
                    <div>content</div>
                    <Outlet/>
                </div>
                <footer>footer</footer>
            </div>

        </div>
    )
}

export default RootLayout;