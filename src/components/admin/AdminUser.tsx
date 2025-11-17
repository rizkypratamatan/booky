import AdminUserPagination from "@/components/admin/AdminUserPagination.tsx";
import AdminUserTable from "@/components/admin/AdminUserTable.tsx";
import Search from "@/components/ui/Search.tsx";


export default function AdminUser() {
    return <section className="flex flex-col gap-6">
        <h2 className="text-2xxl font-bold">User</h2>
        <Search className="max-w-150" placeholder="Search user"/>
        <div className="p-4 border border-neutral-300 rounded-xl blur-20">
            <AdminUserTable/>
            <AdminUserPagination/>
        </div>
    </section>
}
