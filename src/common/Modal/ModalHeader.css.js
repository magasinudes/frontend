import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${grey[300]}`,
  },
  back: {
    display: "flex",
    alignItems: "center",
    marginRight: "2rem",
  },
});

export default styles;
