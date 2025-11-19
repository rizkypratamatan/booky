import DetailReviewCard from "@/components/detail/DetailReviewCard.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import BookRating from "@/components/ui/BookRating.tsx";
import {Button} from "@/components/ui/button.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import type Review from "@/types/interfaces/Review.ts";


type Props = {
    reviews?: Review[];
};

export default function DetailReview({reviews}: Props) {
    return <section className="flex flex-col gap-4.5 items-center">
        <div className="flex flex-col gap-1 w-full md:gap-3">
            <SectionTitle title="Review"/>
            <BookRating rate="4.9 (24 Ulasan)"/>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {reviews?.map((review: Review, index: number) =>
                <DetailReviewCard key={index} name={review.user.name} datetime={review.createdAt.toString()} text={review.comment}>
                    <Avatar className="size-16">
                        <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                </DetailReviewCard>)}
        </div>
        <Button className="w-50 h-12 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
            More</Button>
    </section>;
}
