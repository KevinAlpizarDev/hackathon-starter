import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ProjectRoutes } from '../project/routes/ProjectRoutes';
import { CheckingAuth } from '../ui/components';
import { useState, useEffect } from 'react';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

    const { loading, isAuthenticated } = useCheckAuth()

    if (loading) {
        return <CheckingAuth />;  // Muestra el componente mientras se verifica la autenticación
    }

    return (
        <Routes>
            {/* Si el usuario está autenticado, lo redirige a las rutas de proyectos */}


            {!isAuthenticated ? (
                <Route path='/*' element={<ProjectRoutes />} />

            ) : (

                <Route path='/auth/*' element={<AuthRoutes />} />
            )


            }


            {/* Ruta por defecto: si no está autenticado, redirige a la página de login */}
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    );
};
