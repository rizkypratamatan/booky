import AdminBookItem from "@/components/admin/AdminBookItem.tsx";
import Search from "@/components/ui/Search.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Link} from "react-router";


export default function AdminBook() {
    return <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold md:text-2xxl">Book List</h2>
        <Link className="flex justify-center items-center w-full max-w-60 h-12 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base" to="/admin/book/add">Add
            Book</Link>
        <Search className="max-w-136" placeholder="Search book" value={''}/>
        <Tabs className="gap-6" defaultValue="all">
            <TabsList className="gap-2 md:gap-3">
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="all">All</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="available">Available</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="borrowed">Borrowed</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="returned">Returned</TabsTrigger>
                <TabsTrigger className="w-auto h-10 px-2.5 py-2 border-neutral-300 rounded-full text-xs font-semibold data-[state=active]:bg-neutral-100 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 sm:px-4 sm:text-sm md:text-base" value="damaged">Damaged</TabsTrigger>
            </TabsList>
            <TabsContent value="all" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AdminBookItem/>
                    <AdminBookItem/>
                    <AdminBookItem/>
                </section>
            </TabsContent>
            <TabsContent value="available" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AdminBookItem/>
                    <AdminBookItem/>
                    <AdminBookItem/>
                </section>
            </TabsContent>
            <TabsContent value="borrowed" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AdminBookItem/>
                    <AdminBookItem/>
                    <AdminBookItem/>
                </section>
            </TabsContent>
            <TabsContent value="returned" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AdminBookItem/>
                    <AdminBookItem/>
                    <AdminBookItem/>
                </section>
            </TabsContent>
            <TabsContent value="damaged" asChild>
                <section className="flex flex-col gap-4 items-center">
                    <AdminBookItem/>
                    <AdminBookItem/>
                    <AdminBookItem/>
                </section>
            </TabsContent>
        </Tabs>
    </div>;
}
