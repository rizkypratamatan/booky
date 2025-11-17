import AdminBook from "@/components/admin/AdminBook.tsx";
import AdminBorrowed from "@/components/admin/AdminBorrowed.tsx";
import AdminUser from "@/components/admin/AdminUser.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";


export default function Admin() {
    return <Tabs className="gap-4 md:gap-6" defaultValue="borrowed">
        <TabsList className="gap-2 w-full max-w-139.25 h-14 p-2 bg-background-200 rounded-2xl">
            <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="borrowed">Borrowed List</TabsTrigger>
            <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="user">User</TabsTrigger>
            <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="book">Book List</TabsTrigger>
        </TabsList>
        <TabsContent value="borrowed" asChild>
            <AdminBorrowed/>
        </TabsContent>
        <TabsContent value="user" asChild>
            <AdminUser/>
        </TabsContent>
        <TabsContent value="book" asChild>
            <AdminBook/>
        </TabsContent>
    </Tabs>;
}
