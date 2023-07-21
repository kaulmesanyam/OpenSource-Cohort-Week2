import fetch from 'node-fetch';

var sendObj = {
    method: "GET"
};

function logRespBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFunc(result) {
    result.json().then(logRespBody);
}

fetch("http://localhost:3000/sendCounterInQuery?counter=10", sendObj).then(callbackFunc);