import Search from "@/components/ui/Search.tsx";


export default function AdminUser() {
    return <section className="flex flex-col gap-6">
        <h2 className="text-2xxl font-bold">User</h2>
        <Search className="max-w-150" placeholder="Search user"/>
    </section>
}
