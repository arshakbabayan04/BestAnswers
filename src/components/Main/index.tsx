import { FC } from "react";
import "./index.css";

const Main: FC = () => {
    return (
        <>
            <main className="main">
                <div className="container mx-auto">
                    <div className="main wrapper flex w-full flex-col justify-center items-center">
                        <h1 className="text-white text-6xl ml-12">
                            Welcome to Best Answers
                        </h1>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
