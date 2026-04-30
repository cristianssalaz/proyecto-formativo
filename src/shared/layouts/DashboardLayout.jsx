import { Outlet } from "react-router-dom";
import heroBg from '@/assets/images/bg-2.jpg';
import { CreateUserPage } from "@/features/users";
import { Navbar } from "@/shared";
// import { Login } from "../../features/auth/components/Login.jsx"

export default function MainLayout(){
    return (
        <div className='relative min-h-screen text-text-primary'>
            {/* Fondo de pantalla */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <Navbar/>
            {/* Contenido dinamico de las paginas  */}

            <main>
                {/* <CreateUserPage /> */}
                {/* <Login /> */}
                <Outlet />
            </main>
        </div>
    );   
}