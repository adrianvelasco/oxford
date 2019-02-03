import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom'



const student = props => <Link to="/Student" {...props} />
const home = props => <Link to="/Home" {...props} />
const Listuser = props => <Link to="/ListUser" {...props} />

export const sideList = (
  <div>
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