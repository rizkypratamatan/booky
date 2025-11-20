import dayjs from "dayjs";


type Props = {
    dueDate: Date;
    status: string;
};

export default function BookBorrowedItemStatus({dueDate, status}: Props) {
    return <div className="flex gap-6 justify-between items-center">
        <div className="flex gap-1 items-center md:gap-3">
            <p className="text-sm font-bold md:text-base">Status</p>
            <p className="px-2 py-0.5 bg-success-100/5 rounded-sm leading-7 text-sm font-bold text-success-100">{status}</p>
        </div>
        <div className="flex gap-1 items-center md:gap-3">
            <p className="text-sm font-bold md:text-base">Due Date</p>
            <p className="px-2 py-0.5 bg-error-100/5 rounded-sm leading-7 text-sm font-bold text-error-100">{dayjs(dueDate).format('DD MMMM YYYY')}</p>
        </div>
    </div>;
}
