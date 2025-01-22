
import { useState } from "react";



export const useCheckAuth = () => {
    // Estado para el cargando mientras se valida la autenticación
    const [loading, setLoading] = useState(false);
    const isAuthenticated = localStorage.getItem('AuthToken');  // Verifica si el usuario está autenticado

    return {
        loading,
        isAuthenticated
    }
}

