import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  appMain: {
    position: "relative",
    background: "white",
    border: `1px solid ${grey[300]}`,
    borderRadius: "3px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    padding: theme.spacing(1),
  },
});

export default styles;
