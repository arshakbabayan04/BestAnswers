import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Question } from "../../types";

export const addQuestion = createAsyncThunk(
    "question/addQuestion",
    async (postData: any) => {
        await axios.post("http://localhost:5000/question", postData);
    }
);

export const addComment = createAsyncThunk(
    "question/addComment",
    async (postData: any) => {
        const { data } = await axios.post(
            "http://localhost:5000/question/comment",
            postData
        );
        return data;
    }
);

export const likeComment = createAsyncThunk(
    "question/likeComment",
    async (id: string | number) => {
        await axios.patch(`http://localhost:5000/question/comment/like/${id}`);
        return id;
    }
);

export const likeQuestion = createAsyncThunk(
    "question/likeQuestion",
    async (id: string | number) => {
        await axios.patch(`http://localhost:5000/question/like/${id}`);
        return id;
    }
);

export const fetchQuestion = createAsyncThunk(
    "question/fetchQuestion",
    async () => {
        const { data } = await axios.get("http://localhost:5000/question");
        return data.questions;
    }
);

export const fetchSingleQuestion = createAsyncThunk(
    "question/fetchSingleQuestion",
    async (id: string) => {
        const { data } = await axios.get(
            `http://localhost:5000/question/${id}`
        );
        return data.question;
    }
);
