import { createSlice } from "@reduxjs/toolkit";
import { Category, Question } from "../../types";
import { fetchCategory } from "./categoryApi";
import { addQuestion, fetchQuestion } from "./questionApi";

interface questionState {
    questions: Question[];
    categories: Category[];
}

const initialState: questionState = {
    questions: [],
    categories: [],
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(addQuestion.fulfilled, () => {
                console.log("Data Posted!!! :)");
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.questions = action.payload;
            });
    },
});

export default questionSlice.reducer;

export const {} = questionSlice.actions;
