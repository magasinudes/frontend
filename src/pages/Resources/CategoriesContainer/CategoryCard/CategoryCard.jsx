import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import r from "$routes";

import styles from "./CategoryCard.css";

const propTypes = {
  category: PropTypes.object,
  outletId: PropTypes.number,
  blank: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  category: null,
  outletId: null,
  blank: false,
  onClick: null,
};

const useStyles = makeStyles(styles);

const CategoryCard = ({
  category,
  outletId,
  blank,
  onClick,
}) => {
  const classes = useStyles();

  return (
    blank ? (
      <div className={classes.root}>
        <Card
          className={classes.card}
          onClick={onClick}
        >
          <Typography variant="h6">
            <AddIcon className={classes.addIcon} />
          </Typography>
        </Card>
      </div>
    ) : (
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
    )
  );
};

CategoryCard.propTypes = propTypes;
CategoryCard.defaultProps = defaultProps;

export default CategoryCard;
