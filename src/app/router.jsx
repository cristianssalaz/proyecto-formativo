import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    AuthLayout,
    DashboardLayout
} from "@/shared";
import { Login } from "@/features/auth";
import { CreateUserPage } from "@/features/users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace />,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [{ index: true}],        
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [           
               { index: true, element: <CreateUserPage /> },
               { 
                    path: "auth", 
                    element: (
                        <div className="flex min-h[calc(100vh-4rem)] items-center justify-center p-6">
                            <Login nextTo="/dashboard" cancelTo="/dashboard"/>  
                        </div>
                    )
            
                },
                      
        ],
    }
    
]);

export default router;