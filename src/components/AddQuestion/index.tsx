import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCategory } from "./categoryApi";

import "./index.css";
import { addQuestion } from "./questionApi";
import Swal from "sweetalert2";

const AddQuestion: FC = () => {
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.question);

    useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    return (
        <>
            <div className="add_quest min-h-screen pt-24">
                <div className="container mx-auto">
                    <h2 className="text-white text-center text-6xl">
                        Add Question
                    </h2>
                    <div className="form wraper mt-12 w-1/2 mx-auto">
                        <Formik
                            initialValues={{ question: "", categories: [] }}
                            validationSchema={Yup.object({
                                question: Yup.string().required("Required"),
                                categories: Yup.array().min(1),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                dispatch(addQuestion(values))
                                    .unwrap()
                                    .then(() => {
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Your question has been saved",
                                            showConfirmButton: false,
                                            timer: 1500,
                                        });
                                    })
                                    .then(() => {
                                        resetForm();
                                    });
                            }}
                        >
                            {({ handleSubmit, errors, touched, resetForm }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                            <label
                                                htmlFor="comment"
                                                className="sr-only"
                                            >
                                                Your question
                                            </label>
                                            <Field
                                                name="question"
                                                as="textarea"
                                                id="question"
                                                className="w-full px-0 text-sm border-0 text-gray-900 bg-white border-0s dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                                                placeholder="Write a question..."
                                            ></Field>
                                            {errors.question &&
                                            touched.question ? (
                                                <div className="text-red-700">
                                                    {errors.question}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="flex items-center gap-12     justify-between px-3 py-2 border-t dark:border-gray-600">
                                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                {categories.map((el) => (
                                                    <li
                                                        key={el.id}
                                                        className="w-1/4 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                                                    >
                                                        <div className="flex items-center ps-3">
                                                            <Field
                                                                id={`checkbox-list-${el.id}`}
                                                                type="checkbox"
                                                                name="categories"
                                                                value={el.id.toString()}
                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor={`checkbox-list-${el.id}`}
                                                                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            >
                                                                {el.name}
                                                            </label>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                            >
                                                Save
                                            </button>
                                        </div>
                                        {errors.categories &&
                                        touched.categories ? (
                                            <div className="w-1/5 text-red-700 ml-3">
                                                Check one
                                            </div>
                                        ) : null}
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuestion;
