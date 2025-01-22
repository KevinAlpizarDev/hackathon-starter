
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>

            <Link to='/auth/login'>
                <p>Login</p>
            </Link>

        </div>
    )
}
