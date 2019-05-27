const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: theme.hoverColor,
    },
  },
});

export default styles;
