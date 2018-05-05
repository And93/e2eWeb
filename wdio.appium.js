const APP_PATH = "c:\\Project\\Tools\\mobile app\\app-release.apk";

exports.config = {
    host: '127.0.0.1',
    port: 4723,

    specs: [
        './src/tests/mobile/*.ts'
    ],

    suites: {},

    exclude: [
        'src/tests/web/*.ts'
    ],

    maxInstances: 1,
    capabilities: [
        {
            browserName: '',
            appiumVersion: '1.6.3',
            deviceName: 'Nexus_5_API_24',
            platformVersion: '7.0',
            platformName: 'android',
            app: APP_PATH,
            waitforTimeout: 30000,
            commandTimeout: 30000
        }
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: false,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 9000000,
        compilers: [
            'ts-node/register',
            'tsconfig-paths/register'
        ]
    },

    services: ['appium'],
    appium: {
        waitStartTime: 90000,
        command: '.appiumLog/appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: '127.0.0.1',
            port: 4723,
            commandTimeout: 30000,
            sessionOverride: true,
            debugLogSpacing: true
        }
    }
};
