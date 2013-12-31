# AngularJS Playground

This repository is a playground for exploring the internals of AngularJS. It includes branches that focus on different aspects of the source code. Each branch has debugger statements included in the source at helpful starting points. 


## Hangouts and Group Study

We hold a Google Hangout on the first Thursday of each month at 7pm Eastern time, open to all. The hangout link is tweeted a few minutes in advance. Be sure to follow [@readthesource](https://twitter.com/readthesource). Please join us if you'd like to participate.


## Wiki and Issues

Between hangouts, we can use the project [wiki](https://github.com/readthesource/angularjs-playground/wiki) to annotate pieces of code with explanations and the respository [issues](https://github.com/readthesource/angularjs-playground/issues) for discussion.


## Getting started

[Git](http://git-scm.com/) is the only hard requirement to work with this repository. But we strongly encourage the use of Google's [Chrome](https://www.google.com/intl/en/chrome/browser/) web browser, along with [Nodejs](http://nodejs.org/), [npm](https://npmjs.org/) and [Grunt](http://gruntjs.com/) to run the included static web server.

Install grunt globally if you don't already have it.

    $ npm install -g grunt-cli

Clone the repository to your system and install npm dependencies.

    $ git clone https://github.com/readthesource/angularjs-playground.git
    $ npm install
    
Choose a branch to explore.

    $ git checkout -f BRANCH_NAME

Run the server and open the app.

    $ grunt server

Open [Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/) (option+command+j on Mac OS X) and refresh the browser. You'll be able to step through the code with the [debugger](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging).

