import { Category } from "./category.models";

export interface Product{
    id: number;
    title: string;
    price: number;
    category: Category;
    images: string[];
    creationAt: string;
    description: string;
}