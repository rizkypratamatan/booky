import BookRating from "@/components/ui/BookRating.tsx";


type Props = {
    author: string;
    category: string;
    rate: string;
    title: string;
};

export default function DetailTitle({author, category, rate, title}: Props) {
    return <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">{category}</p>
        <h2 className="text-2xl font-bold md:text-2xxl">{title}</h2>
        <p className="text-sm font-semibold text-neutral-700 md:text-base">{author}</p>
        <BookRating rate={rate}/>
    </div>;
}
