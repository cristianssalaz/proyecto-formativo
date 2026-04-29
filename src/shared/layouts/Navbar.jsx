import { Search, User } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar(){

    return(
        <nav className="w-full bg-white"> 
            <div>
                <div>
                    {/* Logo de marca */}
                    <div className="flex items-center">
                        <Link to={"/"} className="text-h1 font-heading">
                            Rico Programar
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}