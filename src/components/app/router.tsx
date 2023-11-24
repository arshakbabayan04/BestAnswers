import { useRoutes } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import AddQuestion from "../AddQuestion";
import TopQuestions from "../TopQuestions";

export const Router = () => {
    return useRoutes([
        {
            path: "",
            element: <Header />,
            children: [
                {
                    path: "",
                    element: <Main />,
                },
                {
                    path: "/addquestion",
                    element: <AddQuestion />,
                },
                {
                    path: "/topquestions",
                    element: <TopQuestions />,
                },
            ],
        },
    ]);
};
