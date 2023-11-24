import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

const Header: FC = () => {
    const activeClazz =
        "bg-gray-900 inline-block border-l border-t border-r border-black rounded-t py-2 px-4 text-white font-semibold";
    const defaultClazz =
        "bg-gray-800 inline-block py-2 px-4 text-white hover:bg-gray-700 font-semibold";

    return (
        <>
            <header className="w-full fixed bg-gray-600 border-b-4 border-gray-900">
                <div className="container mx-auto">
                    <div className="header_wrapper flex justify-between items-center">
                        <div className="header_logo">Best Answers</div>
                        <nav>
                            <ul className="flex border-gray-900">
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
