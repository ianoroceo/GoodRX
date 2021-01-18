## GoodRx POC

Repo for GoodRx using WebdriverIO with Mocha and Chai.
Web Automation Testing with Mocha and Chai, WebdriverIO V6 using Page Object Model

> Note: You might find some items that are not optimized. Feel free to create a PR if you want to make some optimization.

***

## Features

- WebdriverIO V6
- Page Object Model
- ESLint
- HTML Reporter
- Nodemailer

> Note: Nodemailer was used for POC purposes

***

## Quick start

Choose one of the following options:

1. (Optional) Install nvm in your machine.
    - [Install nvm on Windows](https://codeburst.io/nvm-for-windows-how-to-install-and-use-13b7a4209791)
    - [Install nvm on Mac](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

2. Install nodeJs using nvm. You can also install nodeJS without using nvm. Here are some references if you are installing not using nvm.
    - [Install nodeJs on Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
    - [Install nodeJs on Mac](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)

3. Install your favorite IDE. I used [VS Code](https://code.visualstudio.com/download) for this.

4. Clone the git repo — `https://github.com/ianoroceo/GoodRX`. Thi is in private Repo. Please reach out to code owner

5. Create .env file. Environment file contains the following. Input the URL of the environment you want the test to run and leave the rest.

```console
URL=

PHARMACY_NAME=
DRUG_QUANTITY=
MEDICINE_DOSAGE=
COUPON_PRICE=
```

6. Install node packages by executing command `npm i`

8. For Running your tests, Please refer to the npm script in package.json

| NPM Script  | Description       |
|-------------|-------------------|
| `npm run test-chrome` | Runs all of the tests on your Machine in Chrome |

> Note: WebdriverIO Configuration is setup to be separate configuration depending on the browser you want the test to be executed or if you want to run it on a cloud service.

9. To check for code error / formatting issues when you made some changes or added items in the script, run `npm run lint`. Alternatively you can run `npm run lint-fix` to automatically fix the errors.

10. Reports are automatically generated after test. You can find the HTML report in `./reports`

11. You can generate a PDF version of the HTML report by executing command

```console
npm run createPdfReport
```

12. You can also send the report to email by executing command

```console
npm run emailReport
```

> Note: Please update emailReport.js for the necessary connections.

### Some Extra when Running Tests

1. You can run specific suites declared in the wdio.conf by passing the `--suite` argument and the suite name. For example, running Allow List tests, you can use the following command

``` console
npm run test-chrome -- --suite search
```

2. You can also run a specific test file by passing the `--spec` argument and the TypeScript compiled location of the file. For Example, running one of the Allow List Tests

``` console
npm run test-chrome -- --spec src/tests/Search/CouponPrice/OTCMedCouponPrice.test.js
```

3. If your test file has multiple test suite (`describe` hook) or test scenarios (`it` tests) inside and you just want to execute only one test suite or one test scenario, you can do it by passing the `--mochaOpts.grep` argument and the string corresponding to the test suite or test scenario. For example:

- Running a specific Test Suite by passing the name of the Describe Hook

```console
npm run test-chrome -- --spec src/tests/Search/CouponPrice/OTCMedCouponPrice.test.js --mochaOpts.grep "OTC Medicine Coupon Price Test"
```

- Running a specific Test Scenario by passing strings unique to the test scenario

```console
npm run test-chrome -- --spec src/tests/Search/CouponPrice/OTCMedCouponPrice.test.js --mochaOpts.grep "Displays Coupon Price Details after clicking on an item in Search Result"

```

> Note: That is why it's essential to have a descriptive and unique name for Hooks and Test Scenarios in order to fully utilize this feature

***

### Others
