import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./register.css";

const apiUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

const Login = () => {
    // const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({ username, password}),
            })
              .then(response => response.json());

            console.log(response?.accessToken);

            setSuccess(true);
            window.localStorage.setItem("isLoggedIn", true);

            //clear state and controlled inputs
            setUsername('');
            setPassword('');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <section className='authContainer'>
            {window.localStorage.getItem("isLoggedIn") ? (
                <section className='formSection'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                    <Link to="/">Home</Link>
                    </p>
                </section>
            ) : (
                <section className='formSection'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
                    <h1 id='signIn'>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            // ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link to="/register">Register</Link>
                        </span>
                    </p>
                </section>
            )}
            </section>
        </>
    )
}

export default Login