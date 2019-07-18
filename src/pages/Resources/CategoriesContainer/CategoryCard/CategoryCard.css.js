import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    maxWidth: "50%",
    minHeight: 125,
    display: "flex",
    flexBasis: "50%",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: "25%",
      minHeight: 175,
    },
    padding: 10,
  },
  card: {
    display: "flex",
    height: "100%",
    backgroundColor: grey[400],
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: grey[500],
    },
  },
  addIcon: {
    height: "6rem",
    width: "6rem",
    color: grey[600],
  },
});

export default styles;
