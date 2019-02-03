import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const drawerWidth = 250;

const student = props => <Link to="/Student" {...props} />
const home = props => <Link to="/Home" {...props} />
const Listuser = props => <Link to="/ListUser" {...props} />

export const drawer = (
  <div>
    <div/>
    <Divider />
     <List component="nav">
        <ListItem >
          <IconButton color="inherit" aria-label="Open drawer" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
              OxfordHouse
          </Typography>
        </ListItem>
        <Divider />
        <ListItem button component={home}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={student}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Register Student"/>
        </ListItem>
        <ListItem button component={Listuser}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="List User" />
        </ListItem>
      </List>
  </div>
);

export const  styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 3,
  },
});

  import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles, drawer } from './style';
import { Switch, Route } from 'react-router-dom'
import Home from '../../Components/Home';
import Student from '../../Components/Student';
import ListUser from '../../Components/ListUser';

class ResponsiveDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      mobile: false
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  
  handleDrawerToggle(){
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              OxfordHouse
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper,}} variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Switch>
              <Route  path="/Home" component={Home} />
              <Route  path="/Student" component={Student} />
              <Route  path="/ListUser" component={ListUser} />
            </Switch>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);