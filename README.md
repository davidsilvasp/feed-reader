# Feed reader test

Feed reader test is a project that is required as an evaluation by [Udacity Advanced Web Front-End Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). This project originally contained a web-based application that reads RSS feeds, but was asked to implement a unit test using [Jasmine](https://jasmine.github.io/).

See the [original repository](https://github.com/udacity/frontend-nanodegree-feedreader).

## Why this Project?
Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Test Suites

The tests of this project are implemented in 4 different test suites. Each suite contains a description and a list of specifications specifying the tests that the project must pass. See below all the suites.

* **RSS Feeds**

    * **Description:**
    The first test suite. This suite is all about the RSS feeds definitions, the allFeeds variable in the application.

    * **Specifications:**
        * Should ensure that the allFeeds variable is defined and not empty.
        * Should ensure that all feed has a name defined and that it is not empty.


* **The Menu**

    * **Description:**
    This test suite is about the interaction with the menu.

    * **Specifications**
        * Should ensure that the body has the menu-hidden class by default.
        * Should ensure that the menu toggles when the menu icon is clicked.


* **Initial Entries**
    * **Description:**
        This test suite is about initial entries.

    * **Specifications:**
        * Should ensure that at least a single entry is loaded.


* **New Feed Selection**

    * **Description:**
    This test suite is about the selection of a new feed.

    * **Specifications:**
        * Should ensure that when a new feed is loaded, the content actually changes.



## Installation:

Clone this repository running `git clone https://github.com/davidsilvasp/feed-reader` or download this project through the repository settings.

## Usage:

Once you have downloaded or cloned this repository, just run the **index.html** file in your browser.
