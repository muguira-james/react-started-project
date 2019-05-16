
# This is a "roll your own" starter for React

## Included

* babel 7
* webpack 4
* scss
* jest
* enzyme
* jest-cucmber


## configuring jest and enayme

There is a config file for jest in the filesystem.  ./src/jest.config.js points to the enzyme config. To be explicit about where jest gets configured from I point to the jest.config.js file in package.json test.

## The tests

* Smoke test of App to make sure it is mounting
* FormContainer is tested to make sure the props are correct
* Inputs (to the form) props are checked and the handleChange event is driven

## Gherkin / Cucumber tests

We have a high level business case test.  Here it is

Feature: test the form

Scenario: draw a form

Given I have a page

When the form is drawn

Then the props are correct

Yes, it is silly but it does shouw that Cucumber can live in the project.



