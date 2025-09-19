import "./Login.css"

function Login() {
    return (
        <div className="login-container">
            <form className="login-box">
                <h2>Fazer login:</h2>

                <div className="input-group">
                    <span className="icon">📧</span>
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input-group">
                    <span className="icon">🔒</span>
                    <input type="password" placeholder="Password" />
                </div>

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Login
