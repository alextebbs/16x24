# 16x24

## Pre-setup

This guide assumes you have the `npm`, `gem`, and `bower` package managers, the
`sass` and `sass-globbing` gems installed globally, and the `gulp` package from NPM
installed globally. If that isn't the case, follow the below steps.

* Install NPM ([guide](http://howtonode.org/introduction-to-npm) or `curl http://npmjs.org/install.sh | sh`
* Install Bower (globally) (`npm install -g bower`)
* Install RubyGems ([Download Link](http://rubygems.org/pages/download))
* Install Sass (globally) (`sudo gem install sass`)
* Install `sass-globbing` (globally) (`sudo gem install sass-globbing`)
  This is a package which simplifies the importing of multiple sass files by letting
  you import using a glob syntax. (Ex `@import sass/**/*`)
* Install Gulp (globally) (`npm install gulp -g`)
* If you'd like LiveReload to work, (install the browser extension)[http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions].
  Livereload is enabled by clicking the icon in the toolbar of your browser. If
  it's listening, the circle in the middle of the icon will be filled black.

## Setup

* Clone this repository and go into the directory `cd folder_name`
* Install project-level dependencies - `npm install && bower install`
* Run Gulp - `gulp`
* Watch changes and start LiveReload - `gulp watch`

### Documentation Links

* [SASS](http://sass-lang.com)
* [Autoprefixer](https://github.com/ai/autoprefixer)
* [LiveReaload](http://livereload.com)
* [Gulp](http://gulpjs.com)
* [Jade](http://jade-lang.com)
