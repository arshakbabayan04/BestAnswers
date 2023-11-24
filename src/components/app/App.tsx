import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { FC } from "react";

const App: FC = () => {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
};

export default App;
