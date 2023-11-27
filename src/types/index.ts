export interface Question {
    id: number | string;
    question: string;
    categories: Category[];
    comments: Comment[];
    likeCount: number;
}

export interface Category {
    id: number | string;
    name: string;
}

export interface Comment {
    id: number | string;
    text: string;
    email: string;
    likeCount: number;
}
