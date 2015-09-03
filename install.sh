#! /bin/bash

# You can use this script to easily install 16x24.
# Basically it removes the crap that has to do with the styleguide, and starts
# you off fresh. It's not doing anything fancy.

read -p "Enter name of directory for this project: " project

cd ..
mv 16x24 $project
cd $project

echo ""

read -p "Want to keep 16x24's .git folder? Or start your own history? (keep/no) " git


if [ $git = no ]
  then rm -rf .git && git init
fi

# install npm packages and bower
npm install && bower install

# remove style guide nonsense
rm src/sass/imports/modules/_style-guide.sass
rm src/jade/includes/sidebar.jade
rm src/jade/style.jade

# Build! Hope it works!
gulp

echo "16x24 is installed. Run 'gulp watch' to start watching for changes."
