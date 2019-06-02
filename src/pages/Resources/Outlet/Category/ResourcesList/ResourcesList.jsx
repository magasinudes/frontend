import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ResourceItem from "./ResourceItem";

import styles from "./ResourcesList.css";

const propTypes = {
  resources: PropTypes.array,
};

const defaultProps = {
  resources: null,
};

const useStyles = makeStyles(styles);

const ResourcesList = ({ resources }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">
          Ressources
        </Typography>
      </div>
      {resources?.length > 0 ? (
        <Paper>
          <List disablePadding>
            {resources.map((res, index) => (
              <React.Fragment key={res.id}>
                <ResourceItem resource={res} />
                {index < (resources.length - 1) && (
                  <Divider />
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>
        // TODO: Pager here
      ) : (
        <div className={classes.blankState}>
          <Typography variant="body1">Aucune ressource</Typography>
        </div>
      )}
    </div>
  );
};

ResourcesList.propTypes = propTypes;
ResourcesList.defaultProps = defaultProps;

export default ResourcesList;
