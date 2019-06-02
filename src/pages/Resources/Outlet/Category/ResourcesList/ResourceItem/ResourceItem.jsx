import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizontal from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./ResourceItem.css";

const propTypes = {
  resource: PropTypes.object.isRequired,
};

const useStyles = makeStyles(styles);

function ResourceItem({ resource }) {
  const classes = useStyles();

  const handleClick = () => {
    console.log("Resource was clicked", resource);
  };

  return (
    <ListItem className={classes.item} onClick={handleClick}>
      <ListItemText primary={resource.name} />
      <ListItemIcon>
        <IconButton edge="end">
          <MoreHorizontal />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}

ResourceItem.propTypes = propTypes;

export default ResourceItem;
