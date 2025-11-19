import type Author from "@/types/interfaces/Author.ts";
import type Base from "@/types/interfaces/Base.ts";
import type Category from "@/types/interfaces/Category.ts";
import type Review from "@/types/interfaces/Review.ts";


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

    reviews: Review[];

    title: string;

    totalCopies: number;
}
