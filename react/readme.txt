SETUP COMMANDS
-These are (roughly) all the commands that were run to set up this directory to its current state, in order.

	npm init - make a package.json
	npm i webpack -S
	-make webpack config
	npm i babel-core babel-loader babel-preset-env babel-preset-react -S
	-make .babelrc file
		{
		  "presets" : ["env", "react"]
		}
	npm i react react-dom -S
	npm install --save react-router-dom
	npm install classnames -S
	npm install sass-loader node-sass webpack --save-dev
	npm i css-loader --save-dev
	npm install --save-dev extract-text-webpack-plugin
	npm install uglifyjs-webpack-plugin -S


WEBPACK REACT - commands.
	build app to static file
		webpack
	watch app files for changes and rebuild via webpack
		webpack --watch

SASS - commands. (not using this directly in current setup because sass building is handled by webpack)
	watch directory and build all to another directory on change:
		sass --update <sass-dir>:<output-dir>/
	build a directory of scss to css:
		sass --update <sass-dir>:<output-dir>/
	build single file:
		sass <dir>/<filename>.scss <output-dir>/<filename>.css


START HERE: Running the app:
	watch both jsx and sass and rebuild on change:
		npm run start 
	build both and exit:
		npm run build

	-These correspond to command in package.json.
	-'webpack' commands there will pick up settings in webpack.config.js.

	What this is doing:
	-Files are built into a single .js file and single .css file and copied over to personalPage/src/main/resources/{js/css}.
	-When building for production these are minified and the filename is hashed for versioning. Otherwise, just winds up being bundle.js and styles.css.