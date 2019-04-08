import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';
import uglify from "rollup-plugin-uglify-es";
import pkg from "./package.json";

export default [{
  input: "src/index.js",
  output: {
    file: pkg.browser,
    format: "umd",
    name: "MagicGrid"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ // transpile ES2015+ to ES5
      exclude: ["node_modules/**"],
      transforms: { forOf: true }
    }),
    uglify()
  ]
}, {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ],
  plugins: [
    babel({
      exclude: ["node_modules/**"],
      transforms: { forOf: true }
    })
  ]
}];
