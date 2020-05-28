import React from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  MenuList,
  MenuItem,
  ListItemText,
  Toolbar,
  Typography,
  List,
} from "@material-ui/core";
import icon from "./icon.png";

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
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <MenuList>
            <NavLink to="/">
              <MenuItem>
                <ListItemText>Home</ListItemText>
              </MenuItem>
            </NavLink>
            <NavLink to="/Analytics">
              <MenuItem>
                <ListItemText>Analytics</ListItemText>
              </MenuItem>
            </NavLink>
            <NavLink to="/Current-Donation">
              <MenuItem>
                <ListItemText>Current Donation</ListItemText>
              </MenuItem>
            </NavLink>
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
}
