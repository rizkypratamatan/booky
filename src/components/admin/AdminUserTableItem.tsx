type Props = {
    title: string;
    value: string;
};

export default function AdminUserTableItem({title, value}: Props) {
    return <div className="flex gap-6 justify-between">
        <p className="text-sm font-medium md:text-base">{title}</p>
        <p className="text-sm font-bold md:text-base">{value}</p>
    </div>;
}
