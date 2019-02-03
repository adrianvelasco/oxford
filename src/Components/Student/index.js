import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline, Typography, 
  Grid, TextField, Button,
  InputAdornment, IconButton
} from '@material-ui/core';
import {  withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { VisibilityOff, Visibility} from '@material-ui/icons';
import { styles, Guardar } from './style';



class FormUser extends Component{
    constructor(){
        super();
        this.state = {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          role: '',
          birthdate: '',
          email: '',
          addressLine1: '',
          addressLine2: '',
          reference: '',
          neighborhood: '',
          estado: '',
          city: '',
          zipCode: '',
          countryCode: '',
          phone: '',
          showPassword: '',
          
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);

    }
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


     handleInputChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }



    handleAddUser = async (e) => {
       e.preventDefault();
      
    const data = {
      "username": this.state.username,
      "password": this.state.password,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "role": this.state.role,
      "birthdate": this.state.birthdate,
      "Email": {
        "email":this.state.email,
      },
      "Address": {
        "addressLine1": this.state.addressLine1,
        "addressLine2": this.state.addressLine2,
        "reference": this.state.reference,
        "neighborhood": this.state.neighborhood,
        "state": this.state.estado,
        "city": this.state.city,
        "zipCode": this.state.zipCode,
      },
      "Phone": {
        "countryCode":this.state.countryCode,
        "phone":this.state.phone
      }
    };


    const url = 'http://localhost:3000/users';

    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .catch(error => console.log(error))

    alert(JSON.stringify(data));

    this.setState({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      role: '',
      birthdate: '',
      email: '' ,
      addressLine1: '',
      addressLine2: '',
      reference: '',
      neighborhood: '',
      estado: '',
      city: '',
      zipCode: '',
      countryCode: '',
      phone: ''
    });
  };



  render(){
    const {classes} = this.props;
    let content = (
      <div>
      <main className={classes.main}>
        <CssBaseline/>
          <form className={classes.form} onSubmit={this.handleAddUser}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="display1" gutterBottom>
                      Agregar nuevo usuario
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                     fullWidth
                     id="firstName"
                     name="firstName"
                     type="text"
                     label="Nombre"
                     className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                     value={this.state.firstName}
                     onChange={this.handleInputChange}
                     
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    fullWidth
                     id="lastName"
                     name="lastName"
                     type="text"
                     label="Apellidos"
                     value={this.state.lastName}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    fullWidth
                     id="role"
                     name="role"
                     type="number"
                     label="Rol"
                     value={this.state.role}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      id="birthdate"
                      type="date"
                      name="birthdate"
                      value={this.state.birthdate}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    fullWidth
                     id="email"
                     name="email"
                     type="text"
                     label="Correo electronico"
                     value={this.state.email}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                     fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment variant="filled" position="end">
                            +
                          </InputAdornment>
                        ),
                     }}
                     id="countryCode"
                     name="countryCode"
                     type="number"
                     label="código de país"
                     value={this.state.countryCode}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                     fullWidth
                     id="phone"
                     name="phone"
                     type="number"
                     label="Telefono"
                     value={this.state.phone}
                     onChange={this.handleInputChange}
                     />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                      name="username"
                      required
                      id="username"
                      label="Usuario"
                      fullWidth
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                      name="password"
                      required
                      id="filled-adornment-password"
                      label="Contraseña"
                      fullWidth
                      value={this.state.password}
                      onChange={this.handleInputChange}
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
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="display1" gutterBottom>
                      Domicilio 
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      label="Línea 1 de la dirección"
                      value={this.state.addressLine1}
                      onChange={this.handleInputChange}
                     />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      label="Línea 2 de la dirección"
                      value={this.state.addressLine2}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                     fullWidth
                     id="reference"
                     name="reference"
                     type="text"
                     label="Referencias"
                     value={this.state.reference}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                     fullWidth
                     id="neighborhood"
                     name="neighborhood"
                     type="text"
                     label="Colonia"
                     value={this.state.neighborhood}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                   <TextField
                     fullWidth
                     id="estado"
                     name="estado"
                     type="text"
                     label="Estado"
                     value={this.state.estado}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                     fullWidth
                     id="city"
                     name="city"
                     type="text"
                     label="Ciudad"
                     value={this.state.city}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                     fullWidth
                     id="zipCode"
                     name="zipCode"
                     type="number"
                     label="Codigo postal"
                     value={this.state.zipCode}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <MuiThemeProvider theme={Guardar}>
                    <Button type="submit" fullWidth variant="contained" color="primary" size="medium" className={classes.submit}>
                        Guardar
                    </Button>
                </MuiThemeProvider>
            </Grid>
          </form>
      </main>
      </div>
    );
    return content;
  }
}


 FormUser.propTypes = {
   classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(FormUser);
