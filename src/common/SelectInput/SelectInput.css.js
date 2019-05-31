const styles = theme => ({
  paper: {
    padding: "2px 4px",
    paddingLeft: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus-within": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor:
        theme.palette.type === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
    },
  },
});

export default styles;
