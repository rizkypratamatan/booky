import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";
import {Fragment} from "react";


export default function CategoryFilterRating() {
    return <Fragment>
        <p className="text-lg font-bold">Rating</p>
        <CheckboxHorizontal containerClass="gap-1" labelClass="flex gap-0.5" value="5" aria-label="filter-rating-checkbox">
            <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            <p>5</p>
        </CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" labelClass="flex gap-0.5" value="4" aria-label="filter-rating-checkbox">
            <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            <p>4</p>
        </CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" labelClass="flex gap-0.5" value="3" aria-label="filter-rating-checkbox">
            <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            <p>3</p>
        </CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" labelClass="flex gap-0.5" value="2" aria-label="filter-rating-checkbox">
            <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            <p>2</p>
        </CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" labelClass="flex gap-0.5" value="1" aria-label="filter-rating-checkbox">
            <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            <p>1</p>
        </CheckboxHorizontal>
    </Fragment>;
}
