import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, withRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import r from "$routes";
import withRouterShape from "$utils/withRouterShape";

import CategoryCard from "./CategoryCard";

import styles from "./CategoriesContainer.css";

const propTypes = {
  outlet: PropTypes.object,
  category: PropTypes.object,
  categories: PropTypes.array,
  ...withRouterShape,
};

const defaultProps = {
  outlet: null,
  category: null,
  categories: [],
};

const useStyles = makeStyles(styles);

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const CategoriesContainer = ({
  outlet,
  category,
  categories,
  ...routerProps
}) => {
  const classes = useStyles();

  const title = outlet?.name || category?.name || "";
  let route;
  let outletId;
  console.log(categories);
  if (outlet) {
    outletId = outlet.id;
    route = r.resources.index.outlet.categories({ id: outlet.id });
  } else if (category) {
    outletId = routerProps.match.params.outledId;
    route = r.resources.index.outlet.category.categories({ outletId, id: category.id });
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">
          {title}
        </Typography>
      </div>
      {categories.length > 8 && (
        <div className={classes.link}>
          <Link variant="h6" component={AdapterLink} to={route}>Voir tout</Link>
        </div>
      )}
      <div className={classes.categories}>
        {categories.slice(0, 8).map(cat => (
          <CategoryCard key={cat.id} category={cat} outletId={outletId} />
        ))}
      </div>
    </div>
  );
};

CategoriesContainer.propTypes = propTypes;
CategoriesContainer.defaultProps = defaultProps;

export default withRouter(CategoriesContainer);
