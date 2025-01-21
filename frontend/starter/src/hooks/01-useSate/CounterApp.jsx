import React, { useState } from 'react';

export const CounterApp = () => {
    // Definición del estado de los contadores con valores iniciales
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    return (
        <div>
            {/* Muestra los valores de los tres contadores */}
            <h1>cuenta 1: {state.counter1}</h1>
            <h1>cuenta 2: {state.counter2}</h1>
            <h1>cuenta 3: {state.counter3}</h1>

            {/* Botón para incrementar el primer contador */}
            <button
                onClick={() => setCounter({
                    ...state, // Mantiene los valores actuales del estado
                    counter1: state.counter1 + 1, // Incrementa counter1
                })}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
                +1 a counter1
            </button>

            {/* Botón para incrementar el segundo contador */}
            <button
                onClick={() => setCounter({
                    ...state,
                    counter2: state.counter2 + 1, // Incrementa counter2
                })}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
                +1 a counter2
            </button>

            {/* Botón para incrementar el tercer contador */}
            <button
                onClick={() => setCounter({
                    ...state,
                    counter3: state.counter3 + 1, // Incrementa counter3
                })}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
                +1 a counter3
            </button>
        </div>
    );
};