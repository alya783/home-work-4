const {
    addStep,
    addFeature,
    addAttachment,
    addIssue,
    addArgument,
    addDescription,
    addEnvironment,
} = require('@wdio/allure-reporter').default;
// const maxInstances = 1;
// const build = 'test build';
// const bsLocal = false;
// const idleTimeout = 180000;
const bsCaps = [
    {
        'bstack:options': {
            "os": "Windows",
            "osVersion": "10",
            "local": "false",
            "seleniumVersion": "3.5.2",
            "userName": process.env.USER,
            "accessKey": process.env.KEY,
        },
        "browserName": "Edge",
        "browserVersion": "latest-beta",
    },
    {
        'bstack:options': {
            "os": "Windows",
            "osVersion": "10",
            "local": "false",
            "seleniumVersion": "3.5.2",
            "userName": process.env.USER,
            "accessKey": process.env.KEY,
        },
        "browserName": "Firefox",
        "browserVersion": "latest-beta",
    },
    {
        'bstack:options': {
            "os": "OS X",
            "osVersion": "Monterey",
            "local": "false",
            "seleniumVersion": "3.14.0",
            "userName": process.env.USER,
            "accessKey": process.env.KEY,
        },
        "browserName": "Safari",
        "browserVersion": "15.0",
    }
];

const localCaps = [{
    maxInstances: 5,
    browserName: 'chrome',
    pageLoadStrategy: 'eager',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
        args: process.env.HL === '1' ? ['--headless'] : [],
    }
}]

const bsServices = ['browserstack'];
const localServices = ['chromedriver'];
exports.config = {
    user: process.env.USER,
    key: process.env.KEY,
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    automationProtocol: 'webdriver',
    maxInstances: 10,
    capabilities: process.env.HUB === 'bs' ? bsCaps : localCaps,
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: process.env.HUB === 'bs' ? bsServices : localServices,
    services: localServices,
    framework: 'mocha',
    cucumberOpts: {
        scenarioLevelReporter: true,
        retry: process.env.RETRY || 0,
        backtrace: true,
        // requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './features/step_definitions/**/*.js',
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: process.env.DBG === '1' ? 600000 : 180000,
    },

    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            // disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: false,
        }]],


    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        require: ['./lib/test.js'],
        timeout: 0,
        retries: 0
    },
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {

    },
    async beforeScenario(world) {
        addEnvironment('SERVER', 'LOCAL');
        addEnvironment('LOGGING', 'DISABLE');
        addEnvironment('HEADLESS', 'FALSE');
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },

    afterStep: function (step, scenario, result, context) {
        // console.log({ step });
        // console.log({ result });
        // console.log({ scenario });
        // console.log({ context });
        if (step.keyword !== undefined) {
            const content = {
                content: '123',
                name: 'name'
            };
            let status = result.passed ? 'passed' : 'failed';
            addStep(step.keyword.toUpperCase() + step.text, content, status);
        }
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    afterScenario: async (world, result, context) => {
        if (world.result.status === 'SKIPPED') {
            world.result.status = 'FAILED'
        }
        console.log({result})
        console.log(result.passed)
        console.log(result.passed)
        console.log(result.passed)
        addDescription('TESTTESTTEST!!! <script>alert(123)</script>')

        if (!result.passed) {
            addDescription('TESTTESTTEST!!!<img src="https://s.keepmeme.com/files/en_posts/20200908/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg">')
        }
        // await browser.reloadSession();
    },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
