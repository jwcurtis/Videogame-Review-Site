function FormInput({ label, type, name }) {
    return (
        <label className="login-entry">
            {label}
            <input type={type} name={name} required />
        </label>
    )
}

function LoginButton({ onClick }) {
    return (
        <button className="login-button" type="submit" onClick={onClick}>
            Login
        </button>
    );
}

export function LoginPage({ onLogonSubmit }) {
    return (
        <div className="login-page">
            <form className = "login-form" onSubmit={onLogonSubmit}>
            <h1>Login</h1>
                <FormInput label="Username:" type="text" name="username" />
                <FormInput label="Password:" type="password" name="password" />
                <LoginButton onClick={onLogonSubmit} />
            </form>

        </div>

    );
}