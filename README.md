### Install playwright

 run `npm init playwright@latest`







### TO generate tests run `npx playwright codegen`



## Runs the end-to-end tests.

`npx playwright test`

## Starts the interactive UI mode.

  `npx playwright test --ui`

##  Runs the tests only on Desktop Chrome.
  `npx playwright test --project=chromium`

## Runs the tests in a specific file.
  `npx playwright test example`

## Runs the tests in debug mode.
  `npx playwright test --debug`

## Auto generate tests with Codegen.

  `npx playwright codegen`;

  - go to browser, proceed the needed steps. All steps are  written on the Playwright Inspector. Stop it when needed copy/past the code to your xxx.spec.js

### To record automatically the test for VS code install "Playwright Test for VSCode"

## We suggest that you begin by typing:

    `npx playwright test`

### Trace report

run `npx playwright test --trace on`

### To create test, that depends on some dependencies

Edit playwright.config.js

import path from "path";
export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

Add new projects
{
      name: 'setup',
      testMatch :"**/**.setup.js"
},

{
      name: 'e2e tests logged in',
      testMatch :"**/*loggedin.spec.js",
      dependencies: ['setup'],
      use: {
              storageState: STORAGE_STATE
            }
    },


