const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    position: "absolute",
    margin: "auto",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -10%)",
  },
  sm: {
    width: "25%",
  },
  md: {
    width: "35%",
  },
  lg: {
    width: "60%",
  },
  xl: {
    width: "90%",
  },
});

export default styles;
