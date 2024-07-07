# Cypress Sample Project

This project demonstrates how to use Cypress for testing a login flow on the _**Herokuapp**_ sample login page.

## Setup

1. **Install Dependencies**:
   ```
   npm install
   ```

2. **Open Cypress**:
   ```
   npx cypress open
   ```

## Running Tests
#### Headless Mode
To run tests in headless mode, use the following command:
   ```
   npx cypress run
   ```
#### Headed Mode
To run tests in headed mode, use the following command:
   ```
   npx cypress run --headed
   ```

#### Running a Specific Spec File
To run a specific test file:
   ```
   npx cypress run --spec "cypress/e2e/login.cy.js"
   ```

### Running tests witin a Docker container
To build test container run:
   ```
   make build
   ```

To run tests within a container:
   ```
   make run
   ```

To build and run tests:
   ```
   make all
   ```

To remove docker image:
   ```
   make clean
   ```

### License
This project is licensed under the MIT License. See the LICENSE file for details.
