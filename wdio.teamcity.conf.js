var timeout = 30000;
var baseUrl = "https://www.onliner.by/";

exports.config = {

    specs: [
        './src/tests/**/*.ts'
    ],
    exclude: [],
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
    screenshotPath: './screenshots/',
    baseUrl: baseUrl,
    waitforTimeout: timeout,
    connectionRetryTimeout: timeout * 2,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['teamcity'],
    mochaOpts: {
        ui: 'bdd',
        timeout: timeout * 4,
        compilers: [
            'ts-node/register',
            'tsconfig-paths/register'
        ]
    },

    before: function (capabilities, specs) {
        browser.windowHandleSize({width: 1920, height: 1080})
    }
};
