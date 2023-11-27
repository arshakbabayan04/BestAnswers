import { FC, useEffect, useMemo, useState } from "react";

import "./index.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchQuestion, likeQuestion } from "../AddQuestion/questionApi";
import { Question } from "../../types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const TopQuestions: FC = () => {
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchQuestion());
    }, []);

    const { questions } = useAppSelector((state) => state.question);

    const filteredQuestions = useMemo(() => {
        return questions.filter((el) => {
            return el.question.toLowerCase().startsWith(name.toLowerCase());
        });
    }, [questions, name]);

    return (
        <>
            <div className="t_quest min-h-screen pt-24">
                <div className="container mx-auto">
                    <h2 className="text-white text-center text-6xl">
                        All Questions
                    </h2>

                    <div className="w-1/2 mx-auto mt-10">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search question"
                            />
                        </div>
                    </div>

                    {filteredQuestions ? (
                        filteredQuestions.map((el: Question) => (
                            <article
                                key={el.id}
                                className="p-6 mt-12 w-1/2 mx-auto text-base bg-white rounded-lg"
                            >
                                <div className="comment_wraper flex items-center mt-5 justify-between">
                                    <h3 className="mb-2 text-black">
                                        Question #{el.id}
                                    </h3>
                                    <div className="heart flex items-center">
                                        <FaHeart
                                            onClick={() => {
                                                if (el.id) {
                                                    dispatch(
                                                        likeQuestion(el.id)
                                                    );
                                                }
                                            }}
                                            className="ml-2 mr-1.5"
                                            color={"red"}
                                        />
                                        <p>{el.likeCount}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 ">
                                    {el.question.length > 30
                                        ? el.question.slice(0, 30) + "..."
                                        : el.question}
                                </p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
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

                                        {el.comments.length}
                                    </button>
                                </div>
                                <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <Link to={`/topquestions/${el.id}`}>
                                        More
                                    </Link>
                                </button>
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
