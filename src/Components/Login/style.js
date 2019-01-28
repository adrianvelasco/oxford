import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Exportacion de constante de Estilo

export const styles = theme => ({
  main:{
    width: 'auto',
    dislay: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
      width:450,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#FF5733',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 2,

  },
  Checbox:{
    marginLeft: theme.spacing.unit * -1,
  }
});

export const ButtonIniciar = createMuiTheme({
  typography:{
    useNextVariants: true,
  },
  palette:
  {
    primary:{
      main:'#ff5722'
    },
  },  
});



