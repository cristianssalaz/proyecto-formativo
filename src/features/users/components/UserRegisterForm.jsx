import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService";

import { Input, Button, DeleteCounter, DeleteEffect, DeleteCounter2, Select } from "@/shared";

export default function UserRegisterForm(){

    const [ documentTypes, setDocumentTypes] = useState([]);

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[]);

    // Handle

    const handleNameChange = (e) => {
        console.log("Nombre: ", e.target.value)
    }
    const handleEmailBlur = (e) => {
        console.log('Email: ', e.target.value)
    }



    return(
        <div>

            <h1 className='text-text-primary text-2xl mb-6'>
                Registro de usuarios
            </h1>

            <form className="grid grid-cols-1 items-center">

                <div className="grid grid-cols-2 gap-6 my-0 mx-auto">
                    {/* Inputs */}

                    <Input 
                    label="Nombre"
                    name='userName'
                    placeholder="Ingrese su nombre"
                    onChange={handleNameChange}                    
                    />

                    <Input 
                        type='email'
                        name='userEmail'
                        label="Correo"
                        placeholder="Ingrese su correo"
                    />

                    <Input 
                    label="Telefono"
                    name='userPhone'
                    placeholder="Ingrese su telefono"
                    type="tel"
                    onSelect={() => console.log("texto seleccionado - Cristian Salazar")}
                    />

                    <Select 
                        label="Tipo de documento"
                        name="userdocumentType"
                        options={documentTypes}
                    />  

                    <Input

                    label="Numero de documento"
                    name='userdocumentNumber'
                    placeholder="Ingrese su numero de documento"
        
                    
                    />
                    <Input 
                    label="Contrasena"
                    name='userDocumentNumber'
                    placeholder="Ingrese su contrasena"
                    type='password'
                    />


                    

                {/* Actions */}

                <div className="flex items-end justify-end gap-6">
                    <Button  
                        variant = "primary" 
                        size="sm"
                    >
                        Cancelar
                    </Button>

                    <Button  
                        variant = "primary" 
                        size="md"
                    >
                        Guardar

                    
                    </Button>

                    {/*

                    */}

                    
                    
                </div>

            </div>
        </form>    
        {/* <DeleteCounter />    */}
        {/* uso del useEffect      */}
        {/* <DeleteEffect />         */}

        <DeleteCounter2 />
    </div>
    )
};