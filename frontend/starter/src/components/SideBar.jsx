export const SideBar = () => {

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <aside className="w-2/6  h-full pt-20 md:pt-32 md:w-32 bg-sky-200
static top-0 left-0 ">
            <h2 className="text-lg font-semibold mb-4 md:ml-4">Menú</h2>
            <ul>
                {options.map((option, index) => (
                    <li className="w-full py-4 hover:bg-lime-600 bg-lime-300" key={index}>{option}</li> // Retorna el li para cada opción
                ))}
            </ul>
        </aside>
    );
};
