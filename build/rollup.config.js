import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import css from 'rollup-plugin-css-only'
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support
import pkg from '../package.json' // import our package.json file to re-use the naming

export default {
  input: "src/index.js", // Path relative to package.json
  output: [
    {
      file: pkg.module, // the name of our esm library
      format: 'esm', // the format of choice
      sourcemap: true, // ask rollup to include sourcemaps
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'VueModal2',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      },
      extend: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    }
  ],
  plugins: [
    css(),
    vue({
      css: false, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
      template: {
        optimizeSSR: true
      }
    }),
    commonjs(),
    buble({
      objectAssign: 'Object.assign',
      exclude: [
        '**/*.css'
      ]
    }), // Transpile to ES5
  ],
  external: ['vue']
};
