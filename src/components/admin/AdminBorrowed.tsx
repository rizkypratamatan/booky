import AdminBorrowedItem from "@/components/admin/AdminBorrowedItem.tsx";
import Search from "@/components/ui/Search.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import useMyLoans from "@/hooks/useMyLoans.ts";
import type {Loan} from "@/types/interfaces/Loan.ts";
import dayjs from "dayjs";
import {useMemo} from "react";


export default function AdminBorrowed() {
    const {data} = useMyLoans();

    const all: Loan[] | undefined = useMemo(() => {
        return data?.data.loans.filter(item => item.status.toLowerCase() === 'borrowed');
    }, [data]);
    const actives: Loan[] | undefined = useMemo(() => {
        return data?.data.loans.filter(item => item.status.toLowerCase() === 'borrowed' && dayjs(item.dueAt).diff(dayjs(item.borrowedAt)) >= 0);
    }, [data]);
    const returned: Loan[] | undefined = useMemo(() => {
        return data?.data.loans.filter(item => item.status.toLowerCase() !== 'borrowed');
    }, [data]);
    const overdues: Loan[] | undefined = useMemo(() => {
        return data?.data.loans.filter(item => item.status.toLowerCase() === 'borrowed' && dayjs(item.dueAt).diff(dayjs(item.borrowedAt)) < 0);
    }, [data]);

    return <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold md:text-2xxl">Borrowed List</h2>
        <Search className="max-w-136" placeholder="Search book" value={''}/>
        <Tabs className="gap-6" defaultValue="all">
            <TabsList className="gap-2 md:gap-3">
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="all">All</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="active">Active</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="returned">Returned</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="overdue">Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="all" asChild>
                <section className="flex flex-col gap-4 items-center">
                    {all?.map((loan: Loan, index: number) =>
                        <AdminBorrowedItem key={index} loan={loan}/>)}
                </section>
            </TabsContent>
            <TabsContent value="active" asChild>
                <section className="flex flex-col gap-4 items-center">
                    {actives?.map((loan: Loan, index: number) =>
                        <AdminBorrowedItem key={index} loan={loan}/>)}
                </section>
            </TabsContent>
            <TabsContent value="returned" asChild>
                <section className="flex flex-col gap-4 items-center">
                    {returned?.map((loan: Loan, index: number) =>
                        <AdminBorrowedItem key={index} loan={loan}/>)}
                </section>
            </TabsContent>
            <TabsContent value="overdue" asChild>
                <section className="flex flex-col gap-4 items-center">
                    {overdues?.map((loan: Loan, index: number) =>
                        <AdminBorrowedItem key={index} loan={loan}/>)}
                </section>
            </TabsContent>
        </Tabs>
    </div>;
}
