import useCart from "@/hooks/useCart.ts";


type Props = {
    token: string;
};

export default function HeaderCart({token}: Props) {
    const {data} = useCart(token);
    console.log(data);

    return <div className="relative size-7 md:size-8">
        <img className="size-full" src="/images/icons/icon-bag-black.png" alt="Bag Icon"/>
        <p className="absolute -right-2 -top-1 size-5 bg-error-100 rounded-full leading-5 text-neutral-25 font-bold text-center md:-right-1.5 md:-top-0.5">1</p>
    </div>;
}
