import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import r from "$routes";

import styles from "./CategoryCard.css";

const propTypes = {
  category: PropTypes.object.isRequired,
  outletId: PropTypes.string.isRequired,
};

const useStyles = makeStyles(styles);

const CategoryCard = ({ category, outletId }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        component={Link}
        to={r.resources.outlet.category(
          { outletId, id: category.id },
        )}
      >
        <Typography variant="h6">
          {category.name}
        </Typography>
      </Card>
    </div>
  );
};

CategoryCard.propTypes = propTypes;

export default CategoryCard;
