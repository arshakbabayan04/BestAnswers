import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Question } from "../../types";

export const addQuestion = createAsyncThunk(
    "question/addQuestion",
    async (postData: any) => {
        await axios.post("http://localhost:5000/question", postData);
    }
);

export const fetchQuestion = createAsyncThunk(
    "question/fetchQuestion",
    async () => {
        const { data } = await axios.get("http://localhost:5000/question");
        return data.questions;
    }
);
