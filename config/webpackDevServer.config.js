const fs = require("fs");
const errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");
const evalSourceMapMiddleware = require("react-dev-utils/evalSourceMapMiddleware");
const ignoredFiles = require("react-dev-utils/ignoredFiles");
const paths = require("./paths");

const protocol = process.env.HTTPS === "true" ? "https" : "http";
const host = process.env.HOST || "0.0.0.0";

module.exports = function (proxy, allowedHost) {
  return {
    disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === "true",
    compress: true,
    clientLogLevel: "none",
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    hotOnly: true,
    publicPath: "/",
    quiet: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    https: (protocol === "https") && {
      key: fs.readFileSync(paths.sslKeyPath),
      cert: fs.readFileSync(paths.sslCertPath),
    },
    host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      // This lets us fetch source contents from webpack for the error overlay
      app.use(evalSourceMapMiddleware(server));
      // This lets us open files from the runtime error overlay.
      app.use(errorOverlayMiddleware());
    },
  };
};
