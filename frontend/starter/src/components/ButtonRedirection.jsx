import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
export const ButtonRedirection = ({ children }) => {
    const location = useLocation(); // Obtiene la ubicación actual

    const navigate = useNavigate()
    // const [isNavigating, setIsNavigating] = useState(true);


    const handleRedirect = () => {

        if (location.pathname === '/') {
            navigate('/auth/register')
        } else if (location.pathname === '/auth/register') {

            navigate('/auth/login')
        } else if (location.pathname === '/auth/login') {

            navigate('/')
        }



    }

    return (
        <div>
            <button onClick={handleRedirect} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">

                contact / about
            </button>

            {children}
        </div>
    )
}

