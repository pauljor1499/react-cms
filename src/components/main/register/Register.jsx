import React from "react";
import "./Register.scss";
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
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const Register = () => {
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
        <div className="register-page-content">
            <Card className="content-card">
                <CardContent className="card-body">
                    <div className="card-title">
                        <h4>Create New Account</h4>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="First name"
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Middle name (Optional)"
                                variant="outlined"
                                margin="none"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Last name"
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth required>
                                <InputLabel>Role</InputLabel>
                                <Select value={role} onChange={handleRoleSelect} label="Role">
                                    <MenuItem value={"Student"}>Student</MenuItem>
                                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                </Select>
                                {/* <FormHelperText>With label + helper text</FormHelperText> */}
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="School"
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                <b>Create Account</b>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="additional-links">
                                <Link component={ReactRouterLink} to="/forgot" variant="body2">
                                    Forgot Password?
                                </Link>
                                <Link component={ReactRouterLink} to="/login" variant="body2">
                                    Already have an account? Log In
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
