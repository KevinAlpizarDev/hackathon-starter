// useWindowWidth.js

import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Escuchar cambios de tamaño
        window.addEventListener('resize', handleResize);

        // Llamar a la función una vez para obtener el tamaño inicial
        handleResize();

        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Este efecto solo se ejecuta al montar y desmontar el componente

    return windowWidth; // Devolver el ancho de la ventana
};

