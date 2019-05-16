
# This is a "roll your own" started for React

## Included

* babel 7
* webpack 4
* scss
* jest
* enzyme


## configuring jest and enayme

There is a config file for jest in the filesystem.  ./src/jest.config.js points to the enzyme config. To be explicit about where jest gets configured from I point to the jest.config.js file in package.json test.

## The tests

* Smoke test of App to make sure it is mounting
* FormContainer is tested to make sure the props are correct
* Inputs (to the form) props are checked and the handleChange event is driven

