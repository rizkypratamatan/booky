export default interface BooksRequest {
    authorId?: number;

    categoryId?: number;

    limit: number;

    page: number;

    q?: string;
}
