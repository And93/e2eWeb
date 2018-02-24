exports.config = {

    specs: [
        './src/tests/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless']
        },
        binary: ['c:\\Users\\andre\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe']
    }
    ],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    deprecationWarnings: false,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: "https://www.onliner.by/",
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],//
    framework: 'mocha',
    reporters: ['teamcity'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 9000000,
        compilers: [
            'ts-node/register',
            'tsconfig-paths/register'
        ]
    },

    before: function (capabilities, specs) {
        browser.windowHandleSize({width: 1920, height: 1080})
    }
};
