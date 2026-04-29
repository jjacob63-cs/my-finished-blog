import {useState, useContext} from "React";
import {AuthContext} from "../AuthenticationContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {login} = useContext(AuthContext);
    const naviagte = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password){
            setError("All fields are required");
            return;
        }

        const success = login(username, password);

        if (success){
            naviagte("/posts");
        } else {
            setError("Invalid Credintials");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                {error && <p style={{color : red}}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;