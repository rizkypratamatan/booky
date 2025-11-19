type Props = {
    description?: string;
};

export default function DetailDescription({description}: Props) {
    return <div className="flex flex-col gap-1">
        <p className="text-xl font-bold">Description</p>
        <p className="w-full text-sm font-medium md:text-base">{description ?? ''}</p>
    </div>;
}
