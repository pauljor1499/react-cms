import React, { useState } from "react";
import "./Login.scss";
//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
//text field
import TextField from "@mui/material/TextField";
// import FormHelperText from "@mui/material/FormHelperText";
//password
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
//select
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { Link as ReactRouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const Login = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState("");
    const handleRoleSelect = (event) => {
        setRole(event.target.value);
    };

    const [email, setEmail] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseEvents = (event) => {
        event.preventDefault();
    };

    const clickLogin = () => {
        navigate("/teacher");
    };

    // const checkLogin = () => {
    //     if (email == "Student") {
    //     } else if (email == "Teacher") {
    //     }
    // };

    return (
        <>
            <div className="login-page-content">
                <Card className="content-card">
                    <CardContent className="card-body">
                        <div className="card-title">
                            <h4>Log In Account </h4>
                        </div>
                        <FormControl fullWidth required>
                            <InputLabel>Role</InputLabel>
                            <Select value={role} onChange={handleRoleSelect} label="Role">
                                <MenuItem value={"Student"}>Student</MenuItem>
                                <MenuItem value={"Teacher"}>Teacher</MenuItem>
                            </Select>
                            {/* <FormHelperText>With label + helper text</FormHelperText> */}
                        </FormControl>
                        <TextField
                            value={email}
                            onChange={handleEmail}
                            label="Email"
                            variant="outlined"
                            margin="none"
                            required
                            fullWidth
                        />
                        <FormControl fullWidth required>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={handlePassword}
                                label="Password"
                                required
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseEvents}
                                            onMouseUp={handleMouseEvents}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="contained" fullWidth onClick={clickLogin}>
                            <b>Log In</b>
                        </Button>
                        <div className="additional-actions">
                            <Link component={ReactRouterLink} to="/forgot" variant="body2">
                                Forgot Password?
                            </Link>
                            <Link component={ReactRouterLink} to="/register" variant="body2">
                                Don't have an account? Register
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Login;
