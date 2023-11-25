import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

const Header: FC = () => {
    const activeClazz =
        "nav-link active-link";
    const defaultClazz =
        "nav-link";

    return (
        <>
            <header className="w-full h-10 fixed bg-inherit pt-2">
                <div className="container mx-auto">
                    <div className="header_wrapper flex justify-between items-center">
                        <div className="header_logo text-xl">Best Answers</div>
                        <nav>
                            <ul className="flex border-gray-900 gap-5 text-lg">
                                <li className="-mb-px mr-1">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mr-1">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                        to="/addquestion"
                                    >
                                        Add Question
                                    </NavLink>
                                </li>
                                <li className="mr-1">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                        to="/topquestions"
                                    >
                                        Top Questions
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
