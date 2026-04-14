import { useState, useEffect } from "react";

import { getDocumentTypes } from "@/features/users/services/selectService.js"

import { Input, Button,  Select } from "@/shared";

import { userSchema } from "../schemas/userSchema";


export default function UserRegisterForm() {

    const [documentTypes, setDocumentTypes] = useState([]);
    const [ formData, setFormData ] = useState({
        userName: "",
        usereamil: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
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
        const { name, value } = e.target;

        setFormData((prev) => ({
            // Se copian los valores anteriores del estado
            ...prev,

            // Se actualiza unicamente lo que cambio
            [name] : value,
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
        <div>


            <h1 className=" text-text-primary text-2xl mb-6">
              Registro de usuario 
            </h1>

            <form 
                className="grid grid-cols-1 items-center gap-6 "
                onSubmit ={handleSubmit}>
                
              {/**Inputs */}
              <div className="grid grid-cols-2 my-0 mx-auto gap-6">
                 <Input
                    label="Nombre"
                    name = "userName"
                    placeholder="Ingrese su nombre"
                    value = {formData.userName}
                    onChange={handleChange}
                    error = {errors.userName}

                  
                    />
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
                    label="Telefono"
                    name = "userPhone"
                    placeholder="Ingrese su telefono"
                    type="tel"
                    value = {formData.userPhone}
                    onChange={handleChange}
                    error = {errors.userPhone}
                />


                <Select
                    label = "Tipo de Documento"
                    name = "userDocumentType"
                    options = {documentTypes}
                    value = {formData.userDocumentType}
                    onChange={handleChange}
                    error = {errors.userDocumentType}
                />



                <Input
                    label="Numero de documento"
                    name = "userDocumentNumber"
                    placeholder="Ingrese su numero de documento"
                    type="tel"
                    value = {formData.userDocumentNumber}
                    onChange={handleChange}
                    error = {errors.userDocumentNumber}
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
                <div className="flex items-end  justify-end gap-6">
                    <Button
                        variant="secondary"
                        size="sm"
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        size="md"
                    >
                        Guardar
                    </Button>
                </div>

              </div>
               


            </form>

            {/* <DeleteCounter/>
            <DeleteEffect/> */}
            {/* <DeleteCounter2/> */}
        </div>
    );
}