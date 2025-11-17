import BookRating from "@/components/ui/BookRating.tsx";
import type {ReactNode} from "react";
import {Link} from "react-router";


type Props = {
    author: string;
    children: ReactNode;
    rate: string;
    title: string;
};

export default function BookCard({author, children, rate, title}: Props) {
    return <Link to="/detail">
        <div className="flex flex-col rounded-xl blur-20">
            {children}
            <div className="flex flex-col gap-0.5 p-4 md:gap-1">
                <p className="text-sm font-bold text-neutral-900 md:text-lg">{title}</p>
                <p className="text-sm font-medium text-neutral-700 md:text-base">{author}</p>
                <BookRating rate={rate}/>
            </div>
        </div>
    </Link>;
}
