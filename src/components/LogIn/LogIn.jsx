import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div className="col-md-4 offset-md-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={handleChange} required aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={handleChange} required placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}