const styles = theme => ({
  fab: {
    position: "fixed",
    color: "white",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#06753D",
    "&:hover": {
      backgroundColor: "#056936",
    },
  },
  form: {
    marginBottom: "1.5rem",
  },
  formInput: {
    width: "100%",
  },
});

export default styles;
