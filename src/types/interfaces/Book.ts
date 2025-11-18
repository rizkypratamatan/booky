import type Author from "@/types/interfaces/Author.ts";
import type Base from "@/types/interfaces/Base.ts";
import type Category from "@/types/interfaces/Category.ts";


export default interface Book extends Base {
    author: Author;

    authorId: number;

    availableCopies: number;

    borrowCount: number;

    category: Category;

    categoryId: number;

    coverImage: string;

    description: string;

    isbn: string;

    publishedYear: number;

    rating: number;

    reviewCount: number;

    title: string;

    totalCopies: number;
}
