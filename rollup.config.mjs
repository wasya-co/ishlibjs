
//
// unused - it didnt work well
//

import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import alias from '@rollup/plugin-alias';
import path from 'path';
const projectRootDir = path.resolve();


export default {
  input: "src/TestApp_Gallery20230112Chitown.jsx",
  output: {
    file: "bundle.js",
    format: "iife",
    sourcemap: false,
    inlineDynamicImports: true,
  },
  plugins: [
    alias({
      entries: [
        // { find: '$shared', replacement: path.resolve(projectRootDir, 'src/shared/index.jsx') },
        { find: '$shared', replacement: path.resolve(projectRootDir, 'src/shared') },

        { find: '$components', replacement: path.resolve(projectRootDir, 'src/components') },
      ],
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
    }),
    commonjs(),
  ]
};
