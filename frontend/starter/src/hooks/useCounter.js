import { useState } from "react";

// Hook estándar y buena práctica
export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    // Función para incrementar el contador
    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    const decrement = (value = 1) => {
        if (counter === 0) return

        setCounter(prevCounter => prevCounter - value);
    };


    // Se devuelve tanto el contador como la función para actualizarlo
    return {
        counter,
        increment,
        reset,
        decrement
    };
};
