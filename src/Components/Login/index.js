import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navegation from '../Navegation';
import PropTypes from 'prop-types'
import {styles, ButtonIniciar} from './style';
import {
  Paper, Avatar, Button, Checkbox, TextField, IconButton,
  CssBaseline, FormControl, InputAdornment,
  FormControlLabel
}from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import withStyles from '@material-ui/core/styles/withStyles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter} from 'react-router-dom';



class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
  }

  handleClickShowPassword(){
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleInputChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

  handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      "username": this.state.username,
      "password": this.state.password
    }


    const url = 'http://localhost:3000/auth/login';

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      const accessToken = response.accessToken;
      localStorage.setItem("accessToken", accessToken);

      const refreshToken = response.refreshToken;
      localStorage.setItem("refreshToken", refreshToken);

      const userInformation = response.userInformation;
      localStorage.setItem("userInformation", JSON.stringify(userInformation));

      const message = response.message;
      console.log("message", message);

      ReactDOM.render(
        <BrowserRouter>
          <Navegation/>
         </BrowserRouter>,
        document.getElementById('root')
      );
    })
    .catch(error => console.log(error));
  };


  render(){

    const {classes} = this.props;

    return(
      <div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
             <Avatar className={classes.avatar}>
              <AccountCircle/>
             </Avatar>
             <form className={classes.form} onSubmit={this.handleLogin}>
              <FormControl margin="normal" required fullWidth>
                <TextField name="username" required id="outlined-required" placeholder="Usuario"  variant="outlined" value={this.state.username} onChange={this.handleInputChange}  />
                <TextField name="password" required id="filled-adornment-password" placeholder="Contraseña" margin="normal" variant="outlined" value={this.state.password} onChange={this.handleInputChange}
                  type={this.state.showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment:(
                    <InputAdornment variant="filled" position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel className={classes.Checbox} control={<Checkbox value="remember" color="primary" required/>} label="Recuerdame" />
                <MuiThemeProvider theme={ButtonIniciar}>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>INICIAR</Button>
                </MuiThemeProvider>
              </FormControl>
             </form>
          </Paper>
        </main>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);
