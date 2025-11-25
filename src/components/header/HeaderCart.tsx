import Image from "@/components/ui/Image.tsx";
import useCart from "@/hooks/useCart.ts";
import {Link} from "react-router";


type Props = {
    token: string;
};

export default function HeaderCart({token}: Props) {
    const {data} = useCart(token);

    return <div className="relative size-7 md:size-8">
        <Link to="/cart">
            <Image className="size-full" src="/images/icons/icon-bag-black.png" alt="Bag Icon"/>
        </Link>
        <p className="absolute -right-2 -top-1 size-5 bg-error-100 rounded-full leading-5 text-neutral-25 font-bold text-center md:-right-1.5 md:-top-0.5">{data?.data?.items.length}</p>
    </div>;
}
