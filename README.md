# Automation Test using Cypress Cucumber on Ebay

### Prerequisites:

- node version `^v14.5.0`
- Install Node.js and npm, we will use npm to install or yarn
- Cypress x Cucumber for automation testing

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd assignment-test-warpin
$ npm install
```

### How to Run:

```sh
$ npm run cypress                                     | Run all test with headless browser
$ npm run cypress -- -e TAGS='@ebay' --browser chrome | Run Ebay search scenario with chrome browser
$ npm run reports                                     | Generate test report
$ npm run open-reports                                | Open test report
$ npm run cypress-ui                                  | Open cypress desktop
```
