const {
    startClientPC,
    startSatelite,
    stopClientPC,
    stopEarthServer,
    stopSatelite,
    stopMarsServer,
    startEarthServer,
    startMarsServer,
    sendMessage,
    assertResponse
} = require('./stubs/messageservice.stubs');

// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

function startAllNodes() {
    startClientPC();
    const earthToken = startEarthServer();
    const marsToken = startMarsServer();
    startSatelite();
    return {
        earth: earthToken,
        mars: marsToken,
    }
}

function stopAllNodes(){
    stopMarsServer();
    stopEarthServer();
    stopSatelite();
    stopClientPC();
}

describe('Message Sending', function () {
    it('should send message to Mars without error', function () {
        let tokens = startAllNodes();
        const response = sendMessage('Hello', 'Mars', tokens.mars);
        assertResponse(response, 'Success');
        stopAllNodes()
    });

    it('should send message to Earth without error', function () {
        let tokens = startAllNodes();
        const response = sendMessage('Hello', 'Earth', tokens.earth);
        assertResponse(response, 'Success');
        stopAllNodes()
    });

    it('should send message to Earth with "Security Error"', function () {
        startAllNodes();
        const response = sendMessage('Hello', 'Earth', 'X0000');
        assertResponse(response, 'Security Error');
        stopAllNodes()
    });
})
