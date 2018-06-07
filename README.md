End-to-end web autotests
======

## Description
In this repository is the code of the autotest of the main page onliner.by

## Stack
JavaScript (TypeScript) - NodeJs - Selenium - Mocha - Webdriver.io - Allure;


## Run test
1. Local
```bash
cd e2eWeb
npm install
npm test
```

2. Teamcity
```bash
cd e2eWeb
npm install
npm run test:teamcity
```

3. Jenkins
```bash
cd e2eWeb
npm install
npm run test:jenkins
```


## Use pattern
PageObject, BlockObject, AssertsObject, Helper.


## Requirements
nodejs >= v8.9.1
npm >= 5.7.1


## Docs
http://webdriver.io/
https://github.com/webdriverio/webdriverio/
