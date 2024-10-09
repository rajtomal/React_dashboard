import React, { useState } from 'react'
import './LogIn_Registration.scss'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LogIn_Registration = () => {
    const Navigate = useNavigate();
    const [age, setAge] = useState('');
    const [isLogIn, setIsLogIn] = useState(true);
    const [showPassword, setShowPassword] = React.useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [logErrors, setLogErrors] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
        if (isTouched) {
            if (name === 'email') {
                if (!value) {
                    setLogErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    setLogErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
                } else {
                    setLogErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear the error if the email is valid
                }
            }

            // Validate password as user types (optional)
            if (name === 'password') {
                if (!value) {
                    setLogErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
                } else {
                    setLogErrors((prevErrors) => ({ ...prevErrors, password: '' })); // Clear error for password if valid
                }
            }
        }
    }
    const validate = () => {
        let isValid = true; // Track the validation status

        // Email validation
        if (!loginData.email) {
            setLogErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
            isValid = false;
            setIsTouched(true);
        } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
            setLogErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            setIsTouched(true);
            isValid = false;
        }

        // Password validation
        if (!loginData.password) {
            setLogErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
            isValid = false;
            setIsTouched(true);
        }

        return isValid; // Return the validation status
    };

    const logIn = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form is valid, submit the form');
            // Proceed with login logic here
        } else {
            console.log('Form is invalid, show errors');
        }

    }
    const handleChange = (event) => {
        setAge(event.target.value);
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <section className="login-section">
                {isLogIn && <div className="form-container">
                    <p className="title">Login</p>
                    <form onSubmit={logIn} className="form">
                        <div className="input-group my-1">
                            <label>Email</label>
                            <input className={logErrors.email ? 'border-danger' : ''} type="email" onChange={handleInputChange} name="email" placeholder="Enter Email" id="username" />
                            {logErrors.email && <p className="text-danger p-0 m-0">{logErrors.email}</p>}
                        </div>
                        <div className="input-group password-area my-1">
                            <label>Password</label>
                            <FormControl fullWidth className={logErrors.password ? 'password-error' : ''}>
                                <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    className='password-input'
                                    onChange={handleInputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter Password"
                                />
                            </FormControl>
                            {logErrors.password && <p className="text-danger p-0 m-0">{logErrors.password}</p>}
                        </div>
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                        <button type="submit" className="sign">Login</button>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                    </div>
                    <p className="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="#" onClick={() => setIsLogIn(false)} className="">Registration</a>
                    </p>
                </div>}

                {!isLogIn &&
                    <div className="form-container-registration">
                        <p className="title">User Registration</p>
                        <form onSubmit={logIn} className="form">
                            <div className="row">
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>First Name</label>
                                        <input type="text" name="first_name" placeholder="Enter First Name" id="username" />
                                    </div>
                                </div>
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>Last Name</label>
                                        <input type="text" name="last_name" placeholder="Enter Last Name" id="username" />
                                    </div>
                                </div>
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>Office ID</label>
                                        <input type="text" name="office_id" placeholder="Enter Office ID" id="username" />
                                    </div>
                                </div>
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>Factory</label>
                                        <FormControl fullWidth>
                                            <Select
                                                value={age}
                                                displayEmpty
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="" disabled>Select Factory</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>Department</label>
                                        <FormControl fullWidth>
                                            <Select
                                                value={age}
                                                displayEmpty
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="" disabled>Select Department</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-1">
                                    <div className="input-group">
                                        <label>Designation</label>
                                        <FormControl fullWidth>
                                            <Select
                                                value={age}
                                                displayEmpty
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="" disabled>Select Designation</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-12 my-1">
                                    <div className="input-group">
                                        <label>Role</label>
                                        <FormControl fullWidth>
                                            <Select
                                                value={age}
                                                displayEmpty
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="" disabled>Select Role</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-12 my-1">
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="text" name="email" placeholder="Enter Email" id="username" />
                                    </div>
                                </div>
                                <div className="col-lg-12 my-1 mb-3">
                                    <div className="input-group password-area">
                                        <label>Password</label>
                                        <FormControl fullWidth>
                                            <OutlinedInput
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="Enter Password"
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-12 my-1">
                                    <button type="submit" className="sign">Sign in</button>
                                </div>
                            </div>
                        </form>
                        <div className="social-message">
                            <div className="line"></div>
                        </div>
                        <p className="signup">Do you have an account?
                            <a rel="noopener noreferrer" onClick={() => setIsLogIn(true)} href="#" className="">LogIn</a>
                        </p>
                    </div>}




            </section>
        </>
    )
}

export default LogIn_Registration