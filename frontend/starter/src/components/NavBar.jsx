
import { Link } from "react-router-dom"
export const NavBar = () => {


    const onLogout = () => {

        console.log('Logout');


    }

    return (
        <nav className="nav-container">
            <ul className="md:flex md:justify-between  md:space-x-10">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <button onClick={onLogout}>
                exit
            </button>


        </nav>
    )
}
