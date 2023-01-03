import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Collapse, Grid } from "@material-ui/core";
import EmisionsComponent from "./collects/environment/emisions/emisionsComponent";
import CustomBreadCrumb from "../custom-components/breadcrumbs/breadcrumbs";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    icon_styles: { color: "white", fontSize: "16px" },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "white",
      borderBottom: "2px solid #00adef",
      boxShadow: "none",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    list_title_styles: {
      whiteSpace: "pre-wrap",
      color: "white",
      fontWeight: 300,
      fontSize: "14px",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    sidebar_title: {
      fontSize: "20px",
      marginBottom: "8px",
      color: "white",
      fontWeight: 300,
    },
    main_styles: { width: "100%" },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    sidebar_styles: {
      paddingTop: "40px",
      padding: "40px 20px",
      background: "#0cbdf3",
      height: "100%",
    },
  })
);

const DefaultDashboard: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [listOpen, setListOpen] = React.useState(true);

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <CustomBreadCrumb />
          <div style={{ marginLeft: "auto" }}>
            <div style={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{
                  background: "#007eef",
                  color: "white",
                  marginRight: "20px",
                  borderRadius: "6px",
                }}
              >
                Subscribe
              </Button>
              <Avatar>OP</Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div
          style={{
            background: "#007eef",
            borderTopRightRadius: "15px",
            display: "grid",
            placeItems: "center",
            height: "66px",
          }}
        >
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
          <img height="50px" width="150px" src="/main_logo.png" />
        </div>
        <div className={classes.sidebar_styles}>
          <Typography className={classes.sidebar_title} variant="h2">
            Section 1
          </Typography>
          <Divider style={{ background: "white" }} />
          <List>
            {["Sustainext HQ", `Materiality Dashboard`].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon className={classes.icon_styles} />
                  ) : (
                    <MailIcon className={classes.icon_styles} />
                  )}
                </ListItemIcon>
                <Typography className={classes.list_title_styles}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.sidebar_title} variant="h2">
            Section 2
          </Typography>
          <Divider style={{ background: "white" }} />
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon className={classes.icon_styles} />
              </ListItemIcon>
              <Typography
                style={{ marginRight: "50px" }}
                className={classes.list_title_styles}
              >
                {"Collect"}
              </Typography>
              {listOpen ? (
                <ExpandLess style={{ color: "white" }} />
              ) : (
                <ExpandMore style={{ color: "white" }} />
              )}
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white", fontSize: "14px" }} />
                  </ListItemIcon>
                  <Typography className={classes.list_title_styles}>
                    {"Environment"}
                  </Typography>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white", fontSize: "14px" }} />
                  </ListItemIcon>
                  <Typography className={classes.list_title_styles}>
                    {"Governance"}
                  </Typography>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white", fontSize: "14px" }} />
                  </ListItemIcon>
                  <Typography className={classes.list_title_styles}>
                    {"Social"}
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
            {["Analyze", "Reports", "Optimize", "Track"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon className={classes.icon_styles} />
                  ) : (
                    <MailIcon style={{ color: "white", fontSize: "14px" }} />
                  )}
                </ListItemIcon>
                <Typography className={classes.list_title_styles}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.sidebar_title} variant="h1">
            Section 3
          </Typography>
          <Divider style={{ background: "white" }} />
          <List>
            {["General"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon className={classes.icon_styles} />
                  ) : (
                    <MailIcon style={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <Typography className={classes.list_title_styles}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.main_styles}>
        <div className={classes.toolbar} />
        <EmisionsComponent />
      </main>
    </div>
  );
};

export default DefaultDashboard;
