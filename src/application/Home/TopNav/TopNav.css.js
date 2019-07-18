const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: "#06753D",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuRightIcon: {
    marginRight: theme.spacing(1),
    marginLeft: "auto",
  },
  button: {
    color: "white",
  },
});

export default styles;
