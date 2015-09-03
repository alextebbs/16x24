# 16x24

This is a front end setup built on the Gulp task runner. This setup can compile
Sass, minify, lint, and concatenate JS, optimize images and svg files, compile HTML
templates using Jade, refresh your browser automatically, and more. It's pretty cool.

16x24 is mostly a CSS framework which tries to be as unopinionated as possible.
If you don't want to use gulp: don't! Do what makes sense for your project.

This repo contains a full configuration with all the features listed above. You'll
probably want to examine `gulpfile.js` and adjust it according to your
project requirements and directory structure.

## Dependencies and Setup

This setup assumes you have the `npm`, `gem`, and `bower` package managers, the
`sass` and `sass-globbing` gems installed globally, and the `gulp` package from NPM
installed globally. If that isn't the case, follow the below steps.

* Install NPM ([Guide](http://howtonode.org/introduction-to-npm) or `curl -L http://npmjs.org/install.sh | sh`
* Install Bower (`npm install -g bower`)
    * Bower is a package manager for front-end tools and scripts such as
      jQuery or your favorite carousel plugin. All bower packages will be
      installed into `assets/components`. If you'd prefer to manage your
      front-end dependencies the old fashioned way, go right ahead and ignore
      Bower.
* Install RubyGems ([Download](http://rubygems.org/pages/download))
* Install Sass (`sudo gem install sass`)
* Install `sass-globbing` (`sudo gem install sass-globbing`)
    * This is a package which simplifies the importing of multiple `.sass/.scss` files by letting
      you import using a glob syntax. This greatly enhances the experience of
      writing modular and organized Sass/CSS. (Ex: `@import sass/**/*`)
* Install Gulp (`npm install gulp -g`)
* If you'd like LiveReload to work, install the browser extension. ([Download](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions)).
    * LiveReload is enabled by clicking the icon in the toolbar of your browser. If
      it's listening, the circle in the middle of the icon will be filled black.

After these steps are completed, they will not need to be done again on each
new project. These tools will be globally installed on your machine for use on
future projects.

## Installation

### Using the install script

Just make ./install.sh executable, and run it. Your files will be built into
the `_dev` directory.

### Manual install

* Clone this repository (`git clone https://github.com/alextebbs/16x24`)
    * Using SVN? This might still work? `svn checkout https://github.com/alextebbs/16x24`
* Rename project folder (`mv 16x24 your_project_name`)
* Change into project directory (`cd your_project_name`)
* Install project-level dependencies (`npm install && bower install`)
    * This will create the `node_modules` directory (NPM) and the
      `assets/components` directory (Bower). It should be noted that these
      directories are ignored via version control. Review `package.json`
      and `bower.json` for a listing of the packages that will be installed.
* Run Gulp (`gulp`)
    * Run a specific gulp task (`gulp styles` or `gulp scripts`)
* If you didn't get errors, do a dance! Your files have been built into the
  `_dev` directory.

## More

Running `gulp` tells gulp to run the default task. The default task does a few things:

* A directory called `_dev` is created. This is the build destination.
* The directory is wiped of all contents.
* The `styles`, `scripts`, `images`, `templates`, `fonts`, and `svg` tasks
  are run. Each task does it's work asynchronously, and the files are built
  into the `_dev` directory. This directory is ignored via version control by
  default.

Running `gulp watch` tells gulp to run the watch task, which does the
following:

* First runs the default task to set everything up
* Watches globs of files as specified in the Gulpfile, and runs the
  proper task when watched file glob is added, changed, or removed, moving the
  output into the `_dev` directory.

All of this is configurable through the Gulpfile. You should go read it now:
`gulpfile.js`.

## Documentation for packages used

* [NPM](https://www.npmjs.org/doc/)
* [Bower](http://bower.io)
* [Sass](http://sass-lang.com)
* [Sass Globbing](https://github.com/chriseppstein/sass-globbing)
* [Autoprefixer](https://github.com/ai/autoprefixer)
* [LiveReload](http://livereload.com)
* [Gulp](http://gulpjs.com)
* [Jade](http://jade-lang.com)

## TODO

* Don't exit on error!
* Document Sass.
