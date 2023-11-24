import { FC, useEffect } from "react";

import "./index.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchQuestion } from "../AddQuestion/questionApi";
import { Question } from "../../types";

const TopQuestions: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchQuestion());
    }, []);

    const { questions } = useAppSelector((state) => state.question);
    console.log(questions);

    return (
        <>
            <div className="t_quest min-h-screen pt-24">
                <div className="container mx-auto">
                    <h2 className="text-white text-center text-6xl">
                        All Questions
                    </h2>
                    {questions ? (
                        questions.map((el: Question) => (
                            <article className="p-6 mt-12 w-1/2 mx-auto text-base bg-white rounded-lg dark:bg-gray-900">
                                <h3 className="mb-2 text-white">
                                    Question #{el.id}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {el.question.length > 30
                                        ? el.question.slice(0, 30) + "..."
                                        : el.question}
                                </p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                                    >
                                        <svg
                                            className="mr-1.5 w-3.5 h-3.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                            />
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p>Loading</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default TopQuestions;
