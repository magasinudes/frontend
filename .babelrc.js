module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "auto",
        useBuiltIns: "entry",
        forceAllTransforms: true,
        loose: true,
      }
    ],
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      }
    ]
  ],

  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      }
    ],
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import",
    "react-hot-loader/babel"
  ]
}