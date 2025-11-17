import Image from "@/components/ui/Image.tsx";
import {Link} from "react-router";


type Props = {
    title: string;
};

export default function DetailBreadcrumb({title}: Props) {
    return <div className="flex gap-1 items-center">
        <Link className="text-sm font-semibold text-primary-300" to="/">Home</Link>
        <Image className="size-4" src="/images/icons/icon-chevron-right-black.png" alt="Chevron Right Icon"/>
        <Link className="text-sm font-semibold text-primary-300" to="/category">Category</Link>
        <Image className="size-4" src="/images/icons/icon-chevron-right-black.png" alt="Chevron Right Icon"/>
        <p className="text-sm font-semibold line-clamp-1">{title}</p>
    </div>;
}
