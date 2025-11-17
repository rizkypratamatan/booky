import DetailReviewCardRating from "@/components/detail/DetailReviewCardRating.tsx";
import type {ReactNode} from "react";


type Props = {
    children: ReactNode;
    datetime: string;
    name: string;
    text: string;
};

export default function DetailReviewCard({children, datetime, name, text}: Props) {
    return <div className="flex flex-col gap-4 p-4 rounded-2xl blur-20">
        <div className="flex gap-3">
            {children}
            <div className="flex flex-col">
                <p className="text-sm font-bold md:text-lg">{name}</p>
                <p className="text-sm font-medium md:text-base">{datetime}</p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <DetailReviewCardRating/>
            <p className="text-sm font-semibold md:text-base">{text}</p>
        </div>
    </div>;
}
