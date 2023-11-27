import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import "./index.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    addComment,
    fetchSingleQuestion,
    likeComment,
} from "../AddQuestion/questionApi";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const SingleQuestion: FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { question } = useAppSelector((state) => state.question);
    useEffect(() => {
        if (id) {
            dispatch(fetchSingleQuestion(id));
        }
    }, [id]);

    return (
        <div className="single_question min-h-screen pt-24">
            <div className="container mx-auto">
                <div className="bg-white rounded p-5  w-1/2 mx-auto">
                    <h2 className="text-black text-4xl mb-5">Question #{id}</h2>
                    <hr />
                    <p className="my-5">{question?.question}</p>
                    <hr />
                </div>
                <div className="bg-white rounded p-5 mt-5 w-1/2 mx-auto">
                    <div className="headeling_wrapper flex items-center mb-5">
                        <div className="text-black text-2xl mr-2">Comments</div>
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
                        <p>{question?.comments?.length}</p>
                    </div>
                    <hr />
                    <ul>
                        {question?.comments?.map((el: any) => (
                            <li key={el.id}>
                                <div className="comment_wraper flex items-center mt-5 justify-between">
                                    <div className="text-gray-700 text-lg font-semibold italic">
                                        {el.email ? el.email : "User"}
                                    </div>
                                    <div className="heart flex items-center">
                                        <FaHeart
                                            onClick={() => {
                                                if (el.id) {
                                                    dispatch(
                                                        likeComment(el.id)
                                                    );
                                                }
                                            }}
                                            className="ml-2 mr-1.5"
                                            color={"red"}
                                        />
                                        <p>{el.likeCount}</p>
                                    </div>
                                </div>
                                <p className="mt-px ml-5 text-gray-500">
                                    {el.text ? el.text : "there is no comment"}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <hr className="mt-5" />
                </div>
                <div className="form wraper mt-5 w-1/2 mx-auto">
                    <Formik
                        initialValues={{
                            text: "",
                            email: "",
                            questionId: id,
                            id: "",
                        }}
                        validationSchema={Yup.object({
                            text: Yup.string().required("Required"),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            values.id = values.email;
                            dispatch(addComment(values));
                            resetForm();
                        }}
                    >
                        {({ handleSubmit, errors, touched, resetForm }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="w-full mb-2 border border-gray-200 rounded-lg bg-gray-50 ">
                                    <div className="px-4 py-2 border-b-2 bg-white rounded-t-lg">
                                        <label
                                            htmlFor="email"
                                            className="sr-only"
                                        >
                                            Your email
                                        </label>
                                        <Field
                                            name="email"
                                            type="text"
                                            id="email"
                                            className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Write your email..."
                                        ></Field>
                                        {errors.email && touched.email ? (
                                            <div className="text-red-700">
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-t-lg">
                                        <label
                                            htmlFor="comment"
                                            className="sr-only"
                                        >
                                            Your comment
                                        </label>
                                        <Field
                                            name="text"
                                            as="textarea"
                                            id="text"
                                            className="w-full px-0 text-sm border-0 text-gray-900 bg-white border-0s"
                                            placeholder="Write a comment..."
                                        ></Field>
                                        {errors.text && touched.text ? (
                                            <div className="text-red-700">
                                                {errors.text}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="flex items-center gap-12 justify-between px-3 py-2 border-t">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;
