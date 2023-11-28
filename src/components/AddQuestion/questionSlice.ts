import { createSlice } from "@reduxjs/toolkit";
import { Category, Comment, Question } from "../../types";
import { fetchCategory } from "./categoryApi";
import {
    addComment,
    addQuestion,
    fetchQuestion,
    fetchSingleQuestion,
    likeComment,
    likeQuestion,
} from "./questionApi";

interface questionState {
    questions: Question[];
    categories: Category[];
    question: Question | null;
}

const initialState: questionState = {
    questions: [],
    categories: [],
    question: {} as Question,
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
            .addCase(addComment.fulfilled, (state, action) => {
                console.log(action.payload);
                state.question?.comments.push(action.payload.comment);
            })
            .addCase(likeComment.fulfilled, (state, action) => {
                console.log(action.payload);
                let comment: Comment =
                    state.question?.comments.find(
                        (el: Comment) => el.id === action.payload
                    ) || ({} as Comment);
                comment.likeCount++;
            })
            .addCase(likeQuestion.fulfilled, (state, action) => {
                console.log(action.payload);
                let quest: Question =
                    state.questions.find((el) => el.id === action.payload) ||
                    ({} as Question);
                quest.likeCount++;
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.questions = action.payload;
            })
            .addCase(fetchSingleQuestion.fulfilled, (state, action) => {
                state.question = action.payload;
            });
    },
});

export default questionSlice.reducer;

export const {} = questionSlice.actions;
