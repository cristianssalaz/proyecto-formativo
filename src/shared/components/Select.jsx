export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}){   
    return(
        <div className="w-[320px]">
        {label && (
            <label className='block text-caption mb-1 text-text-secondary'>
                {label}
            </label>
        )}
            
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="
            w-full
            h-12
            rounded-md
            boder-border
            px-4
            "
        >
            <option value="">Seleccione una opcion</option>
            {options.map((opt) => (
                <option key={opt.id} value={opt.id}>
                    {opt.label}
                </option>
            ))}
        </select>

        {error && <p className='text-caption text-red-800 text-error' place-self-start>
                {error}</p>}

        </div>
    )

}