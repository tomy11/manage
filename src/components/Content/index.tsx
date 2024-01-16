
import { ReactNode } from "react";


interface ContentProps {
    children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <main className="main">
            <div>
                { children }
            </div> 
        </main>
    );
}

export default Content;