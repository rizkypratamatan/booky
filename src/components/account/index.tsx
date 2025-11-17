import AccountBorrowed from "@/components/account/AccountBorrowed.tsx";
import AccountProfile from "@/components/account/AccountProfile.tsx";
import AccountReview from "@/components/account/AccountReview.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {type Location, useLocation} from "react-router";


export default function Account() {
    const location: Location = useLocation();
    const defaultValue: string = location.pathname.replace('/', '');

    return <div className="flex flex-col gap-6">
        <Tabs className="gap-4 md:gap-6" defaultValue={defaultValue}>
            <TabsList className="gap-2 w-full max-w-139.25 h-14 p-2 bg-background-200 rounded-2xl">
                <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="profile">Profile</TabsTrigger>
                <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="borrowed">Borrowed List</TabsTrigger>
                <TabsTrigger className="text-sm md:w-43.75 md:text-base" value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" asChild>
                <AccountProfile/>
            </TabsContent>
            <TabsContent value="borrowed" asChild>
                <AccountBorrowed/>
            </TabsContent>
            <TabsContent value="reviews" asChild>
                <AccountReview/>
            </TabsContent>
        </Tabs>
    </div>;
}
