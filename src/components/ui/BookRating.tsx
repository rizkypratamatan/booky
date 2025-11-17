type Props = {
    rate: string;
};

export default function BookRating({rate}: Props) {
    return <div className="flex gap-0.5 items-center">
        <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
        <p className="text-sm font-semibold text-neutral-900 md:text-base">{rate}</p>
    </div>;
}
