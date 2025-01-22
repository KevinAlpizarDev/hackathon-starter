// Message.jsx
import React, { useEffect, useState } from 'react';

export const Message = ({ username }) => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    // useEffect(() => {
    //     // Efecto que se ejecuta al montar o actualizar el componente
    //     console.log('Component mounted or updated');

    //     return () => {
    //         // Cleanup cuando el componente se desmonte
    //         console.log('Component unmounted');
    //     };
    // }, []); // Esto solo se ejecuta una vez, cuando el componente se monta


    useEffect(() => {

        const onMouseMove = ({ x, y }) => {

            // const coords = { x, y }
            setCoords({ x, y })


        }


        // Efecto que se ejecuta al montar o actualizar el componente
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            // Cleanup cuando el componente se desmonte
            window.removeEventListener('mousemove', onMouseMove)

        };
    }, []); // Esto solo se ejecuta una vez, cuando el componente se monta







    return (

        <>
            <h3 >
                usuario existe
            </h3>
            {JSON.stringify({ coords })}
        </>

    );
};
