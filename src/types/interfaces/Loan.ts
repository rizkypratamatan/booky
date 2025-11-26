import type Base from "@/types/interfaces/Base.ts";
import type Book from "@/types/interfaces/Book.ts";


export interface Loan extends Base {
    Book: Book;

    bookId: number;

    borrowedAt: Date;

    dueAt: Date;

    returnedAt: Date;

    status: string;

    userId: number;
}
