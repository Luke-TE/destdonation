import React from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {
  Avatar,
  AppBar,
  Button,
  Drawer,
  IconButton,
  MenuList,
  MenuItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
<<<<<<< HEAD
import icon from "./icon.png";
=======

import icon from "./greenIcon.png";
>>>>>>> [if2818] added Header.css and changed text style of menu

import "./Header.css";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    drawer: {
      width: 300,
      background: "#317d01",
      opacity: 0.85,
    },
    navMenu: {},
    companyAvatar: {
      alignSelf: "center",
      width: 100,
      height: 100,
    },

    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
  })
);

export default function ButtonAppBar(props: any) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    if (event.type === "keydown") {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              DestDonation
            </Typography>

            <Button color="inherit">
              <img src={icon} width={30} color="auto"></img>
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <Drawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={toggleDrawer(false)}
        style={{ color: "#317d01" }}
      >
        <IconButton
          style={{ color: "#FFFFFF" }}
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(false)}
          className={classes.closeMenuButton}
        >
          <CloseIcon />
        </IconButton>

        <Avatar className={classes.companyAvatar}>C</Avatar>

        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <div className="homeMenu">
            <MenuList className={classes.navMenu}>
              <NavLink to="/">
                <MenuItem>
                  <ListItemText style={{ color: "white" }}>
                    <p className="menuEntry">Home</p>
                  </ListItemText>
                </MenuItem>
              </NavLink>

              <NavLink to="/Analytics">
                <MenuItem>
                  <ListItemText style={{ color: "white" }}>
                    <p className="menuEntry">Analytics</p>
                  </ListItemText>
                </MenuItem>
              </NavLink>

              <NavLink to="/Current-Donation">
                <MenuItem>
                  <ListItemText style={{ color: "white" }}>
                    <p className="menuEntry">Current Donation</p>
                  </ListItemText>
                </MenuItem>
              </NavLink>
            </MenuList>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
