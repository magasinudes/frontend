import pathToRegexp from "path-to-regexp";
import qs from "qs";

const compile = (path) => {
  const compiled = pathToRegexp.compile(path);

  const wrappedCompiled = (params = {}) => {
    const { query } = params;
    let result = compiled(params);

    if (query) {
      result += `?${qs.stringify(query)}`;
    }

    return result;
  };

  return wrappedCompiled;
};

const r = (path, children) => {
  // Ensure consistency across all routes (ends with /)
  if (!path.endsWith("/")) {
    path = `${path}/`;
  }

  const route = compile(path);
  route.path = path;

  if (children) {
    const keys = Object.keys(children);

    keys.forEach((name) => {
      route[name] = children[name];
    });
  }

  return route;
};

export default {
  root: r("/"),

  // --------------
  // My
  // --------------
  my: r("/my", {
    // ------------
    // My dashboard
    // ------------
    dashboard: r("/my/dashboard"),

    // ------------
    // My reservations
    // ------------
    reservations: r("/my/reservations"),

    // ------------
    // My orders
    // ------------
    orders: r("/my/orders"),

    // ------------
    // My cart
    // ------------
    cart: r("/my/cart"),
  }),

  // --------------
  // Resources
  // --------------
  resources: r("/resources", {
    index: r("/resources"),
    new: r("/resources/new"),
    show: r(`/resources/:id(${/[0-9]+/})`),
    edit: r(`/resources/:id(${/[0-9]+/})`),
  }),
};
