import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import filesize from 'rollup-plugin-filesize';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: [
		{
			sourcemap: false,
			format: 'umd',
			name: 'ProjectName',
			file: 'build/index.min.js'
		}
	],
	plugins: [
    globals(),
    builtins(),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
    commonjs(),

    filesize(),
    
    !production && livereload('build'),

		// If we're building for production (npm run build
		// instead of npm run dev), transpile and minify
		production && buble({ exclude: 'node_modules/**' }),
		production && terser()
	]
};
