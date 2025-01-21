import { Route, Routes, Navigate } from "react-router-dom"
import { ProjectPage } from '../pages/ProjectPage'
import { Contact } from "../../components/Contact"
import { About } from '../../components/About'
export const ProjectRoutes = () => {
    return (



        <Routes>

            <Route path="/" element={<ProjectPage />} />

            <Route path="/*" element={<Navigate to="/" />} />


            {/* 
OTRAS RUTAS */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

        </Routes>


    )
}

