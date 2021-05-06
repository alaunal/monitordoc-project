# Monitor-Doc



**Monitor-Doc** is a simple of HTML template for web enterprise dashboard [**Page Demo**](https://monitordoc.netlify.app/)

## Features
This **WEB Templates** provides a simple way of setting up a modern web development environment. Here is a list of the current features:



-  [**rollup.js**](https://rollupjs.org/guide/en/) a module bundler for JavaScript
-  [**GULP 4**](https://gulpjs.com/) Automate and enhance your workflow.
-  [**Nunjucks**](https://mozilla.github.io/nunjucks/) A rich and powerful templating language for JavaScript.
-  [**ES2015 Babel**](https://babeljs.io/) transpiler that allows you writing JS Code in ES2015/ES6 style.
-  [**Sass**](http://sass-lang.com/): CSS pre-processor with [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer).
-  [**Browsersync**](https://browsersync.io/) with Live reload.
- Minifies and optimize your javascript.

## Requirements
This should be installed on your computer in order to get up and running:
-  [**Node.js**](https://nodejs.org/en/) Required node version is >= `10.0`
-  **npm** Version `6.0.*`
> If you've previously installed gulp globally, run `npm rm --global` gulp before following these instructions.


## Usage
As a prerequisite it's assumed you have `npm` or `yarn` installed.





1.  **Clone Repo**
Make sure you have a **Monitor-Doc** clone repository.
	```
	https://github.com/alaunal/monitordoc-project.git
	```
2.  **Gulp Setup**
you just execute this script `npm install --global gulp-cli`, and make sure your Gulp CLI is currently in the version `2.0.*`
3.  **Install dependencies**
	```
	npm install
	```
	```
	npm install --global rollup
	```
	> if you have done the syntax above before, there is no need to do a step 3 process. but if you are not sure then just do it for check updated.

4.  **Serve or deploy**
When we start the `serve` process, the task runner below has `env`  **development** and automatically `watch` the changes you make to the code.

	```
	yarn serve
	```
		or
	```
	npm run serve
	```




	> We have two environment build tasks in the development process or for deployment production.





**Development Build**
- development watch --> `yarn watch` or `npm run watch`
- development compile --> `yarn dev` or `npm run dev`
**Production Build**
- Production compile --> `yarn build` or `npm run build`
