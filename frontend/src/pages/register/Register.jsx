import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>let's go!</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque a numquam, praesentium quos fuga qui repellendus, ab amet, iure quidem dignissimos enim distinctio molestias! Autem dolor totam iusto voluptas debitis!
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register