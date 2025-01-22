import { Route, Routes, Navigate } from "react-router-dom"
import { ProjectPage } from '../pages/ProjectPage'
import { Contact } from "../../components/Contact"
import { About } from '../../components/About'
import { LandingPage } from "../pages"
export const ProjectRoutes = () => {
    return (



        <Routes>

            <Route path="/" element={<ProjectPage />} />

            <Route path="/home" element={<LandingPage />} />

            <Route path="/*" element={<Navigate to="/" />} />


            {/* 
OTRAS RUTAS */}

        </Routes>


    )
}

