import Account from "@/components/account";
import Admin from "@/components/admin";
import AdminBookAdd from "@/components/admin/AdminBookAdd.tsx";
import Author from "@/components/author";
import Cart from "@/components/cart";
import Category from "@/components/category";
import Checkout from "@/components/checkout";
import Detail from "@/components/detail";
import Home from "@/components/home";
import Register from "@/components/register";
import Success from "@/components/success";
import Providers from "@/providers";
import LayoutProvider from "@/providers/LayoutProvider.tsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import "./index.css";
import Login from "./components/login";


export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<LayoutProvider/>}>
                    <Route index element={<Home/>}/>
                    <Route path="admin">
                        <Route index element={<Admin/>}/>
                        <Route path="book/add" element={<AdminBookAdd/>}/>
                    </Route>
                    <Route path="author/:id" element={<Author/>}/>
                    <Route path="borrowed" element={<Account/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="category" element={<Category/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="detail/:id" element={<Detail/>}/>
                    <Route path="profile" element={<Account/>}/>
                    <Route path="reviews" element={<Account/>}/>
                    <Route path="success" element={<Success/>}/>
                </Route>
            </Route>
        )
    );

    return <Providers>
        <RouterProvider router={router}></RouterProvider>
    </Providers>;
}
