import AccountBorrowed from "@/components/account/AccountBorrowed.tsx";
import AccountReview from "@/components/account/AccountReview.tsx";
import AdminUser from "@/components/admin/AdminUser.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";


export default function Admin() {
    return <Tabs className="gap-6" defaultValue="borrowed">
        <TabsList className="gap-2 h-14 p-2 bg-background-200 rounded-2xl">
            <TabsTrigger className="w-43.75" value="borrowed">Borrowed List</TabsTrigger>
            <TabsTrigger className="w-43.75" value="user">User</TabsTrigger>
            <TabsTrigger className="w-43.75" value="book">Book List</TabsTrigger>
        </TabsList>
        <TabsContent value="borrowed" asChild>
            <AdminUser/>
        </TabsContent>
        <TabsContent value="user" asChild>
            <AccountBorrowed/>
        </TabsContent>
        <TabsContent value="book" asChild>
            <AccountReview/>
        </TabsContent>
    </Tabs>;
}
