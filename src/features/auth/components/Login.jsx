import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService.js";
import { userSchema } from "../schemas/loginSchema";
// import defaultBackgroundImage from "@/assets/images/bg-4.jpg"; 
import { Link, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, ArrowLeft, Menu } from 'lucide-react';

import { Input, 
    Button, 
    DeleteCounter2, 
    Select , 
    Checkbox, 
    IconButton, 
    Dropdown,
    DropdownTrigger,
    DropdownItem,
    DropdownContent,
} from "@/shared";

export default function UserRegisterForm() {

    const navigate = useNavigate();

    const [documentTypes, setDocumentTypes] = useState([]);
    const [ formData, setFormData ] = useState({
        usereamil: "",
        userPassword: "",
    });

    const [errors, setErrors ] = useState([]);
    useEffect (() => {
        getDocumentTypes().then(setDocumentTypes)
    },[]);

    // =================
    //  Handle Generico
    // =================
    /**
     * Funcion que se ejecuta cada vez que cambia el valor de un inputdel formulario
     */
    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor 
        const { name, value, type, checked} = e.target;

        setFormData((prev) => ({
            // Se copian los valores anteriores del estado
            ...prev,

            // Se actualiza unicamente lo que cambio
            [name] : type === "checkbox" ? checked : value,

        }));
    };

    // =================
    //  Handle Submit
    // =================
    /**
     * Funcion que se ejecuta cuando se envia el formulario
     */
    const handleSubmit = (e) => {

        e.preventDefault();

        // Se valida el objeto formData usando el esquema definido con Zod
        // safeParse devuelve un objeto indicando si la validación fue exitosa o no
        const result = userSchema.safeParse(formData);

        // Si la validación falla
        if (!result.success) {
            // Objeto donde se almacenarán los errores por campo
            const fieldErrors = {};

            // Zod devuelve los errores en un arreglo llamado issues
            // Se recorren para asociar cada error a su campo correspondiente
            result.error.issues.forEach((issue) => {
                // issue.path contiene la ruta del campo que falló
                const field = issue.path[0];
                fieldErrors[field ] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }
        setErrors({})
        console.log("Usuario valido",result.data)
    };
    return (
        <div className="flex flex-col justify-center h-screen">

            <div>          
                <form 
                    className="grid grid-cols-1 items-center gap-6 "
                    onSubmit ={handleSubmit}>
                       
                {/**Inputs */}
                    <div className="grid grid-cols-1 my-0 mx-auto gap-6 border p-[48px] rounded-[6px]">

                    <h1 className=" text-text-primary text-2xl mb-6 text-center mt-6">
                Inicio de session
                </h1>

                        <Input
                            label="Correo"
                            name = "userEmail"
                            type= "email"
                            placeholder="Ingrese su correo"
                            value = {formData.userEmail}
                            onChange={handleChange}
                            error = {errors.userEmail}              
                            />
                        <Input
                            label="Contraseña"
                            name = "userPassword"
                            placeholder="Ingrese su contraseña"
                            type="password"
                            value = {formData.userPassword}
                            onChange={handleChange}
                            error = {errors.userPassword}
                        />

                        {/* Actions */}
                        <div className="flex  justify-center gap-6">
                            <Button
                                variant="secondary"
                                size="sm"                        
                                onClick={() => navigate (-1)}                        
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => navigate(-1)}
                            >
                                INICIAR
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}