//ese checkbox recibe unos parametros y tiene un cuerpo(llaves) porque es una funcion

//los labels no aceptan clases, necesitan un id por una propiedad llamada

export default function Checkbox({
    id,                 //Identificador unico (necesario para accesibilidad)
    name,               //Nombre del campo (Util para formulario)
    label,              //Texto visible asociado al checkbox
    checked = false,     //Estado controlado del checkbox
    onChange,           //Funcion que maneja el cambio de estado
    disable = false,    //Indica si el checkbox esta habilitado
    className = "",     //Clases adicionales para personalizacion

}) {

    return(
        <label
        htmlFor={id}
        className={`
            flex items-center gap-2
            text-sm
            cursor-pointer
            ${disable} "opacity-50 cursor-not-allowed" : ""} 
            ${className}
        `}        
        >

            {/* {Input del checkbox} */}
        <input
            id={id}
            name={name}
            type='checkbox'
            checked={checked}
            disabled={disable}
            onChange={onChange}
            className="w-5 h-5"
        />

            <span>{label}</span>
        </label>
    )

}
