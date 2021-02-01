# WESTWINGNOW DEMONSTRATION SCRIPT
This is automation test demonstration script for westwing website


## Requirements

- To run *Firefox* and *Chrome* browsers with docker selenium you need:
  - `docker`
  - `docker-compose`

- Tests are executed with Node.js, requires:
  - `Node.js` version 14 or higher
  - `npm` version 6 or higher

## Quick Setup and Run Test

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

3. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```

Note that selenium containers can be started once and then used across multiple sessions of running and debugging tests.
### Browser specific tests
To run a test against a specific browser use predefined [tags](https://cucumber.io/docs/cucumber/api/#tags):

```gherkin
Feature: Actions for wishlist

    ...

    # This scenario will run only in Chrome browser
    @OnlyChrome
    Scenario: Adding products to wishlist
    ...

    # This scenario will run only in Firefox browser
    @OnlyFirefox
    Scenario: Adding products to wishlist
    ...
```

### Pending tests

To skip a test, use the `@Pending` tag:
```gherkin
Feature: Actions for wishlist

    ...

    # This scenario will be skipped
    @Pending
    Scenario: Adding products to wishlist
    ...
```

### Verbose tests

Currently, a screenshot is attached only for a failing test. In case you want screenshots for a test regardless of its completion status,
use the `@Verbose` tag:

```gherkin
Feature: Actions for wishlist

    ...

    # A screenshot and additional test details will be attached to the report
    @Verbose
    Scenario: Adding products to wishlist
    ...
```
## VNC support

In some cases, you might need to visually see the execution in the browser. That is possible thanks to docker selenium debug images that 
have `XVFB` and `VNC` server installed. Note that debug images are slower and are intended only for development mode.  

### Prerequisites

Download on your machine the [VNC viewer](https://www.realvnc.com/en/connect/download/viewer/).

### Selenium Debug containers

If you already have docker selenium containers running, stop them:

```sh
npm run selenium:stop
```

Start selenium *debug* containers that enable the VNC support:

```sh
# starts the selenium containers with VNC support
npm run selenium:vnc
```

### VNC connection options  

|Browser|Connection options|
|--|--|
|**Chrome**|`127.0.0.1:5900`|
|**Firefox**|`127.0.0.1:5901`|


Now you can connect and enter the remote session.  

### Running tests

Tests by default run in *headless* mode so that a browser window is not visually created.
To run the tests with enabled browser window:

```sh
# runs the tests without headless option
npm run test:vnc
```

Note that even if you started selenium with VNC support, you need to run the `test:vnc` command to see the browsers visually.

To stop the vnc containers use the same command:

```sh
npm run selenium:stop
```