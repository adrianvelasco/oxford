import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import ListIcon from '@material-ui/icons/List';

const drawerWidth = 250;

const student = props => <Link to="/Student" {...props} />
const home = props => <Link to="/Home" {...props} />
const Listuser = props => <Link to="/ListUser" {...props} />

export const drawer = (
  <div>
    <div/>
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

  