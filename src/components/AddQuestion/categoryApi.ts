import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "question/fetchCategory",
    async () => {
        const { data } = await axios.get("http://localhost:5000/categories");
        return data.categories;
    }
);
