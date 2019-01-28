import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const styles = theme => ({
  paper:{
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
       width: 750,
       marginLeft: 'auto',
       marginRight: 'auto',
    },
    marginTop: theme.spacing.unit * 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#ff5722',
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
