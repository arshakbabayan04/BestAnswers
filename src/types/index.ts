export interface Question {
    id: number | string;
    question: string;
    categories: Category[];
}

export interface Category {
    id: number | string;
    name: string;
}
