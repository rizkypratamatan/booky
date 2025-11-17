import CategoryFilterCategory from "@/components/category/CategoryFilterCategory.tsx";
import CategoryFilterRating from "@/components/category/CategoryFilterRating.tsx";
import Image from "@/components/ui/Image.tsx";
import {XIcon} from "lucide-react";
import {Fragment, useState} from "react";


export default function CategoryFilter() {
    const [filter, setFilter] = useState<boolean>(false);

    return <Fragment>
        <div className="flex gap-6 justify-between items-center w-full h-13 p-3 rounded-xl cursor-pointer blur-20 md:hidden" onClick={() => setFilter(true)}>
            <p className="text-sm font-extrabold">Filter</p>
            <Image className="size-5" src="/images/icons/icon-filter-black.png" alt="Filter Icon"/>
        </div>
        <section className={`${filter ? 'translate-x-0' : '-translate-x-[calc(100%+1rem)]'} absolute flex flex-col gap-6 w-[calc(100%-2rem)] py-4 bg-background-100 rounded-xl blur-20 duration-300 md:static md:w-66.5 md:translate-x-0`}>
            <div className="flex flex-col gap-2.5 px-4">
                <div className="flex gap-6 justify-between items-center">
                    <p className="font-bold">Filter</p>
                    <XIcon className="size-5 cursor-pointer md:hidden" onClick={() => setFilter(false)}/>
                </div>
                <CategoryFilterCategory/>
            </div>
            <div className="horizontal-line"></div>
            <div className="flex flex-col gap-2.5 px-4">
                <CategoryFilterRating/>
            </div>
        </section>
    </Fragment>;
}
