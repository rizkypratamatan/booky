import {Link} from "react-router";


export default function HeaderAction() {
    return <div className="absolute left-0 top-full flex gap-3 w-full p-4 bg-background-100 md:static md:gap-4">
        <Link className="basis-1/2 flex justify-center items-center md:w-40.75 h-11 border border-neutral-300 rounded-full font-bold" to="/login">Login</Link>
        <Link className="basis-1/2 flex justify-center items-center md:w-40.75 h-11 bg-primary-300 rounded-full font-bold text-neutral-25" to="/register">Register</Link>
    </div>;
}
