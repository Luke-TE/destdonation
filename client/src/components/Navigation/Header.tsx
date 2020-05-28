import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import icon from "./greenIcon.png";

const useStyles = makeStyles((theme: Theme) =>
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
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#FFFFFF" }} position="static">
        <Toolbar>
          <IconButton
            style={{ color: "#658C47" }}
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "#658C47" }}
          >
            DestDonation
          </Typography>
          <Button style={{ color: "#658C47" }}>
            <img src={icon} width={30} alt={""}></img>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
