const styles = theme => ({
  appContent: {
    paddingTop: 0,
    paddingBottom: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2) * 2,
      paddingRight: theme.spacing(2) * 2,
    },
  },
});

export default styles;
