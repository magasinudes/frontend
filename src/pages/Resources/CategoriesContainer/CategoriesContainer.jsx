import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import withRouterShape from "$utils/withRouterShape";

import CategoryCard from "./CategoryCard";

import styles from "./CategoriesContainer.css";

const propTypes = {
  outlet: PropTypes.object,
  category: PropTypes.object,
  categories: PropTypes.array,
  onAdd: PropTypes.func,
  ...withRouterShape,
};

const defaultProps = {
  outlet: null,
  category: null,
  categories: [],
  onAdd: null,
};

const useStyles = makeStyles(styles);

const CategoriesContainer = ({
  outlet,
  category,
  categories,
  onAdd,
  ...routerProps
}) => {
  const classes = useStyles();

  const title = outlet?.name || category?.name || "";
  let outletId;

  if (outlet) {
    outletId = outlet.id;
  } else if (category) {
    outletId = Number.parseInt(routerProps.match.params.outletId, 10);
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">
          {title}
        </Typography>
      </div>
      <div className={classes.categories}>
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} outletId={outletId} />
        ))}
        <CategoryCard
          blank
          onClick={() => {
            const id = outlet?.id || category?.id;
            return onAdd(id);
          }}
        />
      </div>
    </div>
  );
};

CategoriesContainer.propTypes = propTypes;
CategoriesContainer.defaultProps = defaultProps;

export default withRouter(CategoriesContainer);
