import React from "react";
import "./Login.css";
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

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseEvents = (event) => {
        event.preventDefault();
    };

    const [role, setRole] = React.useState("");
    const handleRoleSelect = (event) => {
        setRole(event.target.value);
    };

    return (
        <>
            <div className="login-page-content">
                <Card className="content-card">
                    <CardContent>
                        <div className="card-title">
                            <h4>Log In Account</h4>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="card-body">
                            <FormControl fullWidth required margin="normal">
                                <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                                <Select value={role} onChange={handleRoleSelect} label="Role">
                                    <MenuItem value={"Student"}>Student</MenuItem>
                                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                </Select>
                                {/* <FormHelperText>With label + helper text</FormHelperText> */}
                            </FormControl>
                            <br />
                            <br />
                            <br />
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                            />
                            <br />
                            <br />
                            <br />
                            <FormControl fullWidth required>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput
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
                            <br />
                            <br />
                            <br />
                            <Button variant="contained" fullWidth>
                                <b>Log In</b>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Login;
