import {Checkbox} from "@/components/ui/checkbox.tsx";
import {setFilterCategory} from "@/stores/slices/filterSlice.ts";
import type {RootState} from "@/stores/store.ts";
import {Label} from "@radix-ui/react-label";
import type {UnknownAction} from "@reduxjs/toolkit";
import type {Dispatch, ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";


type Props = {
    children: ReactNode;
    containerClass?: string,
    labelClass?: string;
    value: string;
};

export default function CategoryFilterCategoryCheckbox({children, containerClass, labelClass, value, ...props}: Props) {
    const filterCategory: number = useSelector((state: RootState) => state.filter.category);
    const dispatch: Dispatch<UnknownAction> = useDispatch();

    return <div className={`${containerClass} flex`}>
        <Checkbox className="size-5" value={value} checked={value === filterCategory.toString()} onCheckedChange={() => dispatch(setFilterCategory(value === filterCategory.toString() ? 0 : Number(value)))} {...props}/>
        <Label className={labelClass}>{children}</Label>
    </div>;
}
