import type {ReactNode} from "react";
import {Link} from "react-router";


type Props = {
    author: string;
    category: string;
    children: ReactNode;
    date?: string;
    duration?: string;
    name: string;
};

export default function CartItem({author, category, children, date, duration, name}: Props) {
    return <div className="grow flex gap-3 items-center md:gap-4">
        {children}
        <div className="grow flex flex-col gap-1 items-start">
            <Link className="px-2 border border-neutral-300 rounded-sm leading-6.5 text-sm font-bold" to="/">{category}</Link>
            <p className="font-bold md:text-lg">{name}</p>
            <p className="text-sm text-neutral-700 md:text-base">{author}</p>
            {(date && duration) && <div className="flex gap-2 items-center">
                <p className="text-sm font-bold md:text-base">{date}</p>
                <div className="ellipse"></div>
                <p className="text-sm font-bold md:text-base">{duration}</p>
            </div>}
        </div>
    </div>;
}
