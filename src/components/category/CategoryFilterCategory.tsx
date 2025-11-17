import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";
import {Fragment} from "react";


export default function CategoryFilterCategory() {
    return <Fragment>
        <p className="text-lg font-bold">Category</p>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Fiction</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Non-Fiction</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Self-Improvement</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Finance</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Science</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-1" aria-label="filter-category-checkbox">Education</CheckboxHorizontal>
    </Fragment>;
}
