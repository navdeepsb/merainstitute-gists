Pluto precompile
================

About
-----
This mini-project within [PlutoFront](https://navdeepsb@bitbucket.org/Yoddha/plutofront.git) is a [Grunt](http://gruntjs.com/) task runner that contains the following:

1. Precompiled resources (ex. Handlebars templates)
2. Tasks for compiling the aforementioned resources
3. Tasks for concatenating and minifying stylesheets
4. Tasks for concatenating and uglifying javascript files

_I absolutely love Grunt_

Getting started
---------------
1. Install __npm__ from [here](https://nodejs.org/) (it comes bundled with NodeJS)
2. Open any command line tool, type `npm -v` and hit Enter. If a version is displayed, it means that __npm__ was successfully installed.
3. In the command line tool and navigate to this directory (containing this readme file)
4. Type `npm install` and hit Enter (this will install all the dependencies/plugins for our mini-project)
5. Done

Executing Grunt tasks
---------------------
1. Open any command line tool and navigate to this directory (containing this readme file)
2. Type `grunt <task_name>` and hit Enter (all available Grunt tasks are present in the next section)
3. Done

Available Grunt tasks
---------------------
1. `handlebars` for compiling Handlebars templates
2. `uglify` for uglifying javascript files
3. `cssmin` for minifying stylesheets
4. `dist` for performing all the above tasks at once

Note
----
* Run `grunt handlebars` before running `grunt uglify`

Author
------
[Navi](mailto:navdeepatwork@gmail.com "Navdeep Singh Bagga")