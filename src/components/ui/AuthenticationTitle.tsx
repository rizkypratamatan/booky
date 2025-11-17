type Props = {
    description: string;
    title: string;
};

export default function AuthenticationTitle({description, title}: Props) {
    return <div className="flex flex-col gap-0.5 md:gap-2">
        <h2 className="text-2xl font-bold md:text-2xxl">{title}</h2>
        <p className="text-sm font-semibold text-neutral-700 md:text-base">{description}</p>
    </div>;
}
