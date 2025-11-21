import CategoryFilterCategoryCheckbox from "@/components/category/CategoryFilterCategoryCheckbox.tsx";
import useCategories from "@/hooks/useCategories.ts";
import type Category from "@/types/interfaces/Category.ts";
import {Fragment} from "react";


export default function CategoryFilterCategory() {
    const {data} = useCategories();

    return <Fragment>
        <p className="text-lg font-bold">Category</p>
        {data?.data?.categories.map((category: Category, index: number) =>
            <CategoryFilterCategoryCheckbox key={index} containerClass="gap-1" value={category.id.toString()} aria-label="filter-category-checkbox">{category.name}</CategoryFilterCategoryCheckbox>)}
    </Fragment>;
}
