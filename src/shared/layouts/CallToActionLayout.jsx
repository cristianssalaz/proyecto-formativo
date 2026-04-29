import { Outlet } from "react-router-dom";
import heroBg from '@/assets/images/6-image-hero-freelancer.jpg';
import { CreateUserPage } from "@/features/users";


export default function CallToActionLayout(){
    return (
        <div className='relative min-h-screen text-text-primary'>
            {/* Fondo de pantalla */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"

                style={{ backgroundImage: `url(${heroBg})` }}
            />
        <CreateUserPage />
        </div>

        
    );
}