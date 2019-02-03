import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const styles = theme => ({
  main:{
    width: 'auto',
    dislay: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
      width:550,
      marginLeft: theme.spacing.unit * 2,
      marginRight: 'auto',
    },
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

export const Guardar = createMuiTheme ({
    typography: {
        useNextVariants: true,
    },
    palette:
    {primary:{
    main: '#ff5722',
    }}
 });
