import AccountBorrowedItem from "@/components/account/AccountBorrowedItem.tsx";
import {Button} from "@/components/ui/button.tsx";
import Search from "@/components/ui/Search.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import useMyLoans from "@/hooks/useMyLoans.ts";


export default function AccountBorrowed() {
    const {data} = useMyLoans();
    console.log(data)

    return <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold md:text-2xxl">Borrowed List</h2>
        <Search className="max-w-136" placeholder="Search book"/>
        <Tabs className="gap-6" defaultValue="all">
            <TabsList className="gap-2 md:gap-3">
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="all">All</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="active">Active</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="returned">Returned</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="overdue">Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="all" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <Button className="w-50 h-12 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
                        More</Button>
                </section>
            </TabsContent>
            <TabsContent value="active" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <Button className="w-50 h-12 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
                        More</Button>
                </section>
            </TabsContent>
            <TabsContent value="returned" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <Button className="w-50 h-12 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
                        More</Button>
                </section>
            </TabsContent>
            <TabsContent value="overdue" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <AccountBorrowedItem/>
                    <Button className="w-50 h-12 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
                        More</Button>
                </section>
            </TabsContent>
        </Tabs>
    </div>;
}
