import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque a numquam, praesentium quos fuga qui repellendus, ab amet, iure quidem dignissimos enim distinctio molestias! Autem dolor totam iusto voluptas debitis!
                    </p>
                    <span>Don't have an account?</span>
                    <button>Register</button>
                </div>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login