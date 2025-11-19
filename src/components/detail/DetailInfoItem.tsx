type Props = {
    count?: number;
    text?: string;
};

export default function DetailInfoItem({count, text}: Props) {
    return <div className="basis-25.5 flex flex-col">
        <p className="text-lg font-bold md:text-2xl">{count ?? ''}</p>
        <p className="text-sm font-medium md:text-base">{text ?? ''}</p>
    </div>;
}
