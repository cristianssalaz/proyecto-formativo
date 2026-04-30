import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-2.png"
import {
    IconButton, 
    Dropdown,
    DropdownTrigger,
    DropdownItem,
    DropdownContent,
} from "@/shared";


export default function Navbar(){

    return(
        <nav className="w-full bg-transparent border-b-2"> 
            <div className="mx-auto max-w-7x1 px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo de marca */}
                    <div className="flex items-center">
                        <Link to={"/"} className="text-h1 font-heading">
                            <img src={logo} alt="logo" className="h-12 w-auto" />
                        </Link>
                    </div>
                    {/* Logo de marca */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/auth"} className="hover:text-primary
                            transition">
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dashboard"} className="hover:text-primary
                            transition">
                            Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary
                            transition">
                            Multimedia
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary
                            transition">
                            Contacto
                            </Link>
                        </li>
                    </ul>

                    {/* Seccion de la derecha: búsqueda + usuario */}
                    <div className="flex item-center gap-4">
                        
                    {/* icono de busqueda */}
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />

                                {/* Input */}
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                            />
                        </div>  
                                               
                    </div>
                    {/*   ============ Dropdown ============= */}
                        <div className="p-10 text-inverse">
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton ariaLabel = "Menu de usuario">
                                        <User />
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to ="/dashboard/auth" className="block w-full " >
                                            Cerrar Session
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to ="/dashboard" className="block w-full text-amber-50">
                                            Panel de control
                                        </Link>
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </div>

                        
                </div>
            </div>
        </nav>
    )

}