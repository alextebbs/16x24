# 16x24

This is a front end setup built on the Gulp task runner. This setup can compile
Sass, minify, lint, and concatenate JS, optimize images and svg files, compile HTML
templates using Jade, refresh your browser automatically, and more. It's pretty cool.
Trust me on this one.

This repo contains a full configuration with all the features listed above. You'll
probably want to examine `gulpfile.js` and adjust it according to your
project requirements and directory structure.

## Pre-setup

This guide assumes you have the `npm`, `gem`, and `bower` package managers, the
`sass` and `sass-globbing` gems installed globally, and the `gulp` package from NPM
installed globally. If that isn't the case, follow the below steps.

* Install NPM ([Guide](http://howtonode.org/introduction-to-npm) or `curl http://npmjs.org/install.sh | sh`
* Install Bower (`npm install -g bower`)
* Install RubyGems ([Download](http://rubygems.org/pages/download))
* Install Sass (`sudo gem install sass`)
* Install `sass-globbing` (`sudo gem install sass-globbing`)
    * This is a package which simplifies the importing of multiple `.sass/.scss` files by letting
      you import using a glob syntax. This greatly enhances the experience of
      writing modular and organized SASS/CSS. (Ex: `@import sass/**/*`)
* Install Gulp (`npm install gulp -g`)
* If you'd like LiveReload to work, install the browser extension. ([Download](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions)).
    * LiveReload is enabled by clicking the icon in the toolbar of your browser. If
      it's listening, the circle in the middle of the icon will be filled black.

After these steps are completed, they will not need to be done again on each
new project. These tools will be globally installed on your machine for use on
future projects.

## Setup

* Clone this repository (`git clone https://github.com/alextebbs/16x24.git`)
    * Using SVN? `svn checkout https://github.com/alextebbs/16x24.git`
* Rename project folder (`mv 16x24 your_project_name`)
* Change into project directory (`cd your_project_name`)
* Install project-level dependencies (`npm install && bower install`)
    * This will create the `node_modules` directory (NPM) and the
      `assets/components` directory (Bower). It should be noted that these
      directories should be ignored via version control. Review `package.json`
      and `bower.json` for a listing of the packages that will be installed.
* Run Gulp (`gulp`)
* Watch changes and start LiveReload (`gulp watch`)
* Run a specific Gulp task (`gulp styles` or `gulp scripts`)

## Documentation for packages used

* [NPM](https://www.npmjs.org/doc/)
* [Bower](http://bower.io)
* [SASS](http://sass-lang.com)
* [Sass Globbing](https://github.com/chriseppstein/sass-globbing)
* [Autoprefixer](https://github.com/ai/autoprefixer)
* [LiveReload](http://livereload.com)
* [Gulp](http://gulpjs.com)
* [Jade](http://jade-lang.com)
