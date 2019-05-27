const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
});

export default styles;
