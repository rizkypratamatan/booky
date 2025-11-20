import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";
import useCategories from "@/hooks/useCategories.ts";
import type Category from "@/types/interfaces/Category.ts";
import {Fragment, useState} from "react";


export default function CategoryFilterCategory() {
    const [checked, setChecked] = useState(false);
    const {data} = useCategories();

    return <Fragment>
        <p className="text-lg font-bold">Category</p>
        {data?.data?.categories.map((category: Category, index: number) =>
            <CheckboxHorizontal key={index} containerClass="gap-1" value={category.id.toString()} checked={checked} setChecked={setChecked} aria-label="filter-category-checkbox">{category.name}</CheckboxHorizontal>)}
    </Fragment>;
}
