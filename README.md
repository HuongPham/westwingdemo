# WESTWINGNOW DEMONSTRATION SCRIPT
This is automation test demonstration script for westwing website


## Requirements

- To run *Firefox* and *Chrome* browsers with docker selenium you need:
  - `docker`
  - `docker-compose`

- Tests are executed with Node.js, requires:
  - `Node.js` version 12 or higher
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