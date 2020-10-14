# Assignment Test Warung Pintar

### Prerequisites:

- node version `^v12.0.0`
- Install Node.js and npm, we will use npm to install or yarn
- Cypress x Cucumber for automation testing

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd assignment-test-warpin
$ npm install
```

### How to Run:

- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress -- -e TAGS=''                     | All test
$ npm run cypress -- -e TAGS='not @skip'            | All test without tag @skip
$ npm run cypress -- -e TAGS='@tagNameScenario'     | Only @tagNameScenario
$ npm run cypress -- -e TAGS='' --browser chrome    | Launch the browser
$ npm run cypress-ui                                | Open the Cypress Desktop from node_modules
```