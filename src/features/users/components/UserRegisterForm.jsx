import { Input, Button } from "@/shared";

export default function UserRegisterForm(){

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
                    placeholder="Ingrese su nombre"
                    onChange={handleNameChange}
                    />
                    <Input 
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    />
                    <Input 
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    />
                    <Input 
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    />
                    <Input 
                    label="Telefono"
                    placeholder="Ingrese su telefono"
                    type="tel"
                    />
                    <Input 
                    label="Correo"
                    placeholder="Ingrese su correo"
                    type="email"
                    onBlur={handleEmailBlur}
                    />
                    <Input 
                    label="Contrasena"
                    placeholder="Ingrese su contrasena"
                    type='password'
                    />
                    <Input 
                    label="Edad"
                    placeholder="Ingrese su edad"
                    type="number"
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
                </div>

                </div>

                

            </form>
            
        </div>
    )
};