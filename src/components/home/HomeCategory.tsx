import useCategories from "@/hooks/useCategories.ts";
import type Category from "@/types/interfaces/Category.ts";


export default function HomeCategory() {
    const {data} = useCategories();

    return <section className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {data?.data?.categories.map((category: Category, index: number) =>
            <div key={index} className="flex flex-col gap-3 p-3 rounded-2xl blur-20 select-none">
                <div className="flex justify-center items-center h-16 bg-primary-100 rounded-xl">
                    <img className="w-auto h-auto" src="/images/icons/icon-category-fiction-color.png" alt="Fiction Icon"/>
                </div>
                <p className="text-xs font-semibold sm:text-sm md:text-base">{category.name}</p>
            </div>)}
    </section>;
}
