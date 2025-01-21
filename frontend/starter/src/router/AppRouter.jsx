import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ProjectRoutes } from '../project/routes/ProjectRoutes';
import { ButtonRedirection } from '../components/ButtonRedirection';
import { CheckingAuth } from '../ui/components';
import { useState } from 'react';
useState
export const AppRouter = () => {
    // Condición de ejemplo: si el usuario está autenticado o no
    const isAuthenticated = localStorage.getItem('AuthToken');  // Puedes usar tu propia lógica de autenticación
    const [loading, setLoading] = useState(false)

    // Si no está autenticado, muestra CheckingAuth
    // status === loading
    if (loading) {
        return <CheckingAuth />;
    }
    return (
        <Routes>

            {
                isAuthenticated
                    ? <Route path='/*' element={<ProjectRoutes />} />

                    : <Route path='/auth/*' element={<AuthRoutes />} />
            }


            {/* Si no estoy autenticado, debria ir a las rutas AuthRoute

crear ruta por defecto  */}

            <Route path='/*' element={<Navigate to='/auth/login' />} />


        </Routes>
    );
};
