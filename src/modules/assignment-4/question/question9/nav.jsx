import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; 

const Sidebar = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <div
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        style={{ width: 250 }}
      >
        <List>
        <ListItem button component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
         
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
