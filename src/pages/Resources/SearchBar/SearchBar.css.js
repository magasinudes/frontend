const styles = theme => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  search: {
    flexGrow: 1,
    marginRight: "2rem",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: "1rem",
    },
  },
  selectCampus: {
    marginRight: "2rem",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: "1rem",
    },
  },
});

export default styles;
