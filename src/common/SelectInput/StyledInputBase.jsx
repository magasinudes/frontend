import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  input: {
    "&:focus": {
      outline: "none",
      backgroundColor: "transparent",
    },
  },
});

export default withStyles(styles)(InputBase);
