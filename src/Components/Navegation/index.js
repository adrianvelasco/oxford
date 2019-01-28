import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {
  Drawer, CssBaseline, AppBar,Toolbar, List,
  Typography, Divider,IconButton, ListItem, 
  ListItemIcon, ListItemText
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountBalance from '@material-ui/icons/AccountBalance';

//Rutas
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../Components/Home';
import Student from '../../Components/Student';
//Styles
import { styles } from './style'

class Navegation extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose= this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen(){
    this.setState({ open: true });
  };

  handleDrawerClose(){
    this.setState({ open: false });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    const home = props => <Link to="/Home" {...props} />
    const student = props => <Link to="/Student" {...props} />

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classNames(classes.appBar, {[classes.appBarShift]: open,})}>
          <Toolbar variant="dense" disableGutters={!open}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
               <IconButton color="inherit">
                  <AccountBalance/>
              </IconButton>
              OxfordHouse
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper,}}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton> 
          </div>
          <Divider />
            <List component="nav">
            <ListItem button component={home}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={student}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Student" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classNames(classes.content, {[classes.contentShift]: open,})}  >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route  path="/Home" component={Home} />
            <Route  path="/Student" component={Student} />
          </Switch>
        </main>
      </div>
    );
  }
}

Navegation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navegation);