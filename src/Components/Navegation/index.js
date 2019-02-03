import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './style';
//Routes
import Routes from '../../Routes/Routes.js';
import { sideList } from './Routes';


class Navegation extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: false,
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{ background : '#FF5733' }}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              OxfordHouse
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
         <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Routes/>
        </main>
      </div>
    );
  }
}

Navegation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navegation);