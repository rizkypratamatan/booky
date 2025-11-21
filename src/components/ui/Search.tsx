import {Input} from "@/components/ui/input.tsx";


type Props = {
    className?: string;
    placeholder: string;
    value: string;
};

export default function Search({className, placeholder, value}: Props) {
    return <div className={`${className} grow flex gap-1.5 items-center h-10 px-3 py-2 border border-neutral-300 rounded-full md:h-11 md:px-4`}>
        <img className="size-5" src="/images/icons/icon-search-gray.png" alt="Search Icon"/>
        <Input className="grow p-0 border-0 shadow-none" type="text" value={value} placeholder={placeholder} aria-label="Search"/>
    </div>;
}
